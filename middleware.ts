import { NextRequest, NextResponse } from "next/server";
import {
  COUNTRY_TO_LOCALE,
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE,
  type Locale,
  isLocale,
} from "@/lib/i18n/config";

const LOCALE_SET = new Set<string>(LOCALES);
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const GEO_TIMEOUT_MS = 700;

function fromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const parsed = header
    .split(",")
    .map((part) => {
      const [tag, ...rest] = part.trim().split(";");
      const qPart = rest.find((p) => p.trim().startsWith("q="));
      const q = qPart ? Number(qPart.split("=")[1]) : 1;
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .filter((p) => p.tag)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of parsed) {
    const base = tag.split("-")[0];
    if (LOCALE_SET.has(base)) return base as Locale;
  }
  return null;
}

function fromCountryHeader(req: NextRequest): Locale | null {
  const candidates = [
    req.headers.get("x-vercel-ip-country"),
    req.headers.get("cf-ipcountry"),
    req.headers.get("x-country-code"),
    req.headers.get("x-railway-ip-country"),
  ];
  for (const raw of candidates) {
    if (!raw) continue;
    const cc = raw.trim().toUpperCase();
    const mapped = COUNTRY_TO_LOCALE[cc];
    if (mapped) return mapped;
  }
  return null;
}

function clientIp(req: NextRequest): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0].trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || null;
}

function isPrivateOrLocal(ip: string): boolean {
  return (
    /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|127\.|169\.254\.|::1$|fc|fd)/i.test(ip) ||
    ip === "localhost"
  );
}

async function fromIpGeo(ip: string): Promise<Locale | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), GEO_TIMEOUT_MS);
    const res = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}?fields=country_code,success`, {
      signal: ctrl.signal,
      headers: { "user-agent": "plebi/1.0" },
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = (await res.json()) as { country_code?: string; success?: boolean };
    if (!data.success || !data.country_code) return null;
    return COUNTRY_TO_LOCALE[data.country_code.toUpperCase()] ?? null;
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const existing = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(existing)) return NextResponse.next();

  let detected: Locale | null = fromCountryHeader(req);

  if (!detected) {
    const ip = clientIp(req);
    if (ip && !isPrivateOrLocal(ip)) {
      detected = await fromIpGeo(ip);
    }
  }

  if (!detected) {
    detected = fromAcceptLanguage(req.headers.get("accept-language"));
  }

  const final = detected ?? DEFAULT_LOCALE;

  const res = NextResponse.next();
  res.cookies.set(LOCALE_COOKIE, final, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
  });
  res.headers.set("x-detected-locale", final);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
