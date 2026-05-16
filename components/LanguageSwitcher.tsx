"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LOCALES, LOCALE_COOKIE, LOCALE_LABELS, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function change(next: string) {
    if (next === current) return;
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${oneYear}; samesite=lax`;
    startTransition(() => router.refresh());
  }

  return (
    <label className="inline-flex items-center gap-2 text-[14px]">
      <span className="sr-only">{label}</span>
      <span aria-hidden className="text-mute">🌐</span>
      <select
        value={current}
        onChange={(e) => change(e.target.value)}
        disabled={pending}
        className="bg-transparent text-graphite hover:text-ink focus:outline-none focus:ring-2 focus:ring-coral/30 rounded px-1 py-0.5 cursor-pointer"
        aria-label={label}
      >
        {LOCALES.map((l) => (
          <option key={l} value={l}>
            {LOCALE_LABELS[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
