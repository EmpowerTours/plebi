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

function fromCountry(req: NextRequest): Locale | null {
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

export function middleware(req: NextRequest) {
  const existing = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(existing)) return NextResponse.next();

  const detected =
    fromCountry(req) ??
    fromAcceptLanguage(req.headers.get("accept-language")) ??
    DEFAULT_LOCALE;

  const res = NextResponse.next();
  res.cookies.set(LOCALE_COOKIE, detected, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
  });
  res.headers.set("x-detected-locale", detected);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
