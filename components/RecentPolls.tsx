import Link from "next/link";
import { listPolls } from "@/lib/polls";
import { timeLeft } from "@/lib/timeLeft";

export async function RecentPolls() {
  let polls: Awaited<ReturnType<typeof listPolls>> = [];
  let dbError: string | null = null;
  try {
    polls = await listPolls(8);
  } catch (err) {
    dbError = err instanceof Error ? err.message : "Could not load polls";
  }

  if (dbError) {
    return (
      <div className="card-warm p-6 md:p-7">
        <div className="eyebrow text-coralDeep">Database not connected</div>
        <p className="mt-2 text-graphite leading-relaxed text-[15px] max-w-[60ch]">
          Set <code className="font-mono text-sm bg-white px-1.5 py-0.5 rounded border hairline">DATABASE_URL</code> in
          your environment. Once a Postgres is attached the app will auto-create its tables.
        </p>
      </div>
    );
  }

  if (polls.length === 0) {
    return (
      <div className="card-warm p-6 md:p-7 text-graphite">
        No polls yet — create the first one above.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {polls.map((p) => {
        const t = timeLeft(p.ends_at);
        return (
          <Link
            key={p.id}
            href={`/p/${p.id}`}
            className="card p-5 hover:border-ink transition-colors flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className={`tag ${t.closed ? "tag-closed" : "tag-live"}`}>
                {!t.closed && <span className="dot dot-live" />}
                {t.label}
              </span>
              <span className="text-mute text-xs numerals">{p.total_votes} {p.total_votes === 1 ? "vote" : "votes"}</span>
            </div>
            <div className="font-display text-xl md:text-[22px] tracking-tight leading-snug line-clamp-3">
              {p.question}
            </div>
            <div className="text-mute text-sm">{p.options.length} options · #{p.id.slice(0, 8)}</div>
          </Link>
        );
      })}
    </div>
  );
}
