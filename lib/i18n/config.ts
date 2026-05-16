export const LOCALES = [
  "en",
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "ja",
  "zh",
  "ko",
  "ar",
  "ru",
  "hi",
  "tr",
  "nl",
  "pl",
] as const;

export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";
export const LOCALE_COOKIE = "plebi_locale";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
  ar: "العربية",
  ru: "Русский",
  hi: "हिन्दी",
  tr: "Türkçe",
  nl: "Nederlands",
  pl: "Polski",
};

export const RTL_LOCALES = new Set<Locale>(["ar"]);

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

// ISO-3166-1 alpha-2 country → preferred site locale.
// Countries not listed fall back to DEFAULT_LOCALE.
export const COUNTRY_TO_LOCALE: Record<string, Locale> = {
  // English
  US: "en", GB: "en", AU: "en", NZ: "en", IE: "en", CA: "en", ZA: "en",
  SG: "en", PH: "en", NG: "en", KE: "en", GH: "en",
  // Spanish
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es",
  EC: "es", GT: "es", CU: "es", BO: "es", DO: "es", HN: "es", PY: "es",
  SV: "es", NI: "es", CR: "es", PA: "es", UY: "es", PR: "es",
  // French
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", SN: "fr", CI: "fr", CM: "fr",
  CD: "fr", MG: "fr", ML: "fr", BF: "fr", NE: "fr", TG: "fr", BJ: "fr",
  // German
  DE: "de", AT: "de", LI: "de", CH: "de",
  // Italian
  IT: "it", SM: "it", VA: "it",
  // Portuguese
  PT: "pt", BR: "pt", AO: "pt", MZ: "pt", CV: "pt",
  // Japanese
  JP: "ja",
  // Chinese
  CN: "zh", TW: "zh", HK: "zh", MO: "zh",
  // Korean
  KR: "ko", KP: "ko",
  // Arabic
  SA: "ar", AE: "ar", EG: "ar", MA: "ar", DZ: "ar", TN: "ar", LY: "ar",
  SD: "ar", IQ: "ar", JO: "ar", LB: "ar", SY: "ar", YE: "ar", OM: "ar",
  KW: "ar", QA: "ar", BH: "ar", PS: "ar", MR: "ar",
  // Russian
  RU: "ru", BY: "ru", KZ: "ru", KG: "ru", TJ: "ru",
  // Hindi
  IN: "hi",
  // Turkish
  TR: "tr",
  // Dutch
  NL: "nl", SR: "nl",
  // Polish
  PL: "pl",
};
