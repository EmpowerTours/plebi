import type { Dictionary } from "./i18n/dictionaries";

export function timeLeft(
  endsAt: string | Date,
  t?: Dictionary["time"],
): { closed: boolean; label: string } {
  const end = typeof endsAt === "string" ? new Date(endsAt).getTime() : endsAt.getTime();
  const diff = end - Date.now();
  if (diff <= 0) return { closed: true, label: t ? t.closed : "closed" };
  const s = Math.floor(diff / 1000);
  if (s < 60) return { closed: false, label: t ? t.endsInS(s) : `${s}s left` };
  const m = Math.floor(s / 60);
  if (m < 60) return { closed: false, label: t ? t.endsInM(m) : `${m}m left` };
  const h = Math.floor(m / 60);
  if (h < 24) return { closed: false, label: t ? t.endsInH(h) : `${h}h left` };
  const d = Math.floor(h / 24);
  return { closed: false, label: t ? t.endsInD(d) : `${d}d left` };
}
