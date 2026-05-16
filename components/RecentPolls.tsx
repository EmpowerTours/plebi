import Link from "next/link";
import { listPolls } from "@/lib/polls";
import { timeLeft } from "@/lib/timeLeft";
import { getDictionary } from "@/lib/i18n/server";

export async function RecentPolls() {
  const { t } = await getDictionary();
  let polls: Awaited<ReturnType<typeof listPolls>> = [];
  let dbError: string | null = null;
  try {
    polls = await listPolls(8);
  } catch (err) {
    dbError = err instanceof Error ? err.message : t.create.somethingWrong;
  }

  if (dbError) {
    return (
      <div className="card-warm p-6 md:p-7">
        <div className="eyebrow text-coralDeep">{t.recent.dbNotConnectedTitle}</div>
        <p className="mt-2 text-graphite leading-relaxed text-[15px] max-w-[60ch]">
          {t.recent.dbNotConnectedBody.split("DATABASE_URL").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <code className="font-mono text-sm bg-white px-1.5 py-0.5 rounded border hairline">
                  DATABASE_URL
                </code>
              )}
            </span>
          ))}
        </p>
      </div>
    );
  }

  if (polls.length === 0) {
    return (
      <div className="card-warm p-6 md:p-7 text-graphite">
        {t.recent.empty}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {polls.map((p) => {
        const ti = timeLeft(p.ends_at, t.time);
        return (
          <Link
            key={p.id}
            href={`/p/${p.id}`}
            className="card p-5 hover:border-ink transition-colors flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className={`tag ${ti.closed ? "tag-closed" : "tag-live"}`}>
                {!ti.closed && <span className="dot dot-live" />}
                {ti.label}
              </span>
              <span className="text-mute text-xs numerals">
                {p.total_votes} {p.total_votes === 1 ? t.recent.voteSingular : t.recent.votePlural}
              </span>
            </div>
            <div className="font-display text-xl md:text-[22px] tracking-tight leading-snug line-clamp-3">
              {p.question}
            </div>
            <div className="text-mute text-sm">
              {p.options.length} {t.recent.optionsSuffix} · #{p.id.slice(0, 8)}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
