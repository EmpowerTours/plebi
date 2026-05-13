export function timeLeft(endsAt: string | Date): { closed: boolean; label: string } {
  const end = typeof endsAt === "string" ? new Date(endsAt).getTime() : endsAt.getTime();
  const diff = end - Date.now();
  if (diff <= 0) return { closed: true, label: "closed" };
  const s = Math.floor(diff / 1000);
  if (s < 60) return { closed: false, label: `${s}s left` };
  const m = Math.floor(s / 60);
  if (m < 60) return { closed: false, label: `${m}m left` };
  const h = Math.floor(m / 60);
  if (h < 24) return { closed: false, label: `${h}h left` };
  const d = Math.floor(h / 24);
  return { closed: false, label: `${d}d left` };
}
