import { cookies, headers } from "next/headers";
import {
  COUNTRY_TO_LOCALE,
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE,
  type Locale,
  isLocale,
} from "./config";
import { DICTIONARIES, type Dictionary } from "./dictionaries";

const LOCALE_SET = new Set<string>(LOCALES);

function fromAcceptLanguage(header: string | null | undefined): Locale | null {
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

function fromCountryHeader(h: Headers): Locale | null {
  const candidates = [
    h.get("x-vercel-ip-country"),
    h.get("cf-ipcountry"),
    h.get("x-country-code"),
    h.get("x-railway-ip-country"),
  ];
  for (const raw of candidates) {
    if (!raw) continue;
    const cc = raw.trim().toUpperCase();
    const mapped = COUNTRY_TO_LOCALE[cc];
    if (mapped) return mapped;
  }
  return null;
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const h = await headers();
  const hinted = h.get("x-detected-locale");
  if (isLocale(hinted)) return hinted;

  return (
    fromCountryHeader(h) ??
    fromAcceptLanguage(h.get("accept-language")) ??
    DEFAULT_LOCALE
  );
}

export async function getDictionary(): Promise<{ locale: Locale; t: Dictionary }> {
  const locale = await getLocale();
  return { locale, t: DICTIONARIES[locale] };
}
