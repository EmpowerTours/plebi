"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getVoterId } from "@/lib/voterId";
import { timeLeft } from "@/lib/timeLeft";
import type { Poll } from "@/lib/types";
import { ShareBar } from "./ShareBar";

type Props = {
  initialPoll: Poll;
  shareUrl: string;
};

export function PollVoter({ initialPoll, shareUrl }: Props) {
  const [poll, setPoll] = useState<Poll>(initialPoll);
  const [yourVote, setYourVote] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0); // re-render for countdown
  const pollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const t = timeLeft(poll.ends_at);
  const closed = t.closed;
  const showResults = closed || yourVote !== null;

  // Fetch existing vote on mount + load latest poll
  useEffect(() => {
    const id = getVoterId();
    fetch(`/api/polls/${poll.id}?voterId=${encodeURIComponent(id)}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.poll) setPoll(data.poll);
        if (typeof data.yourVote === "number") setYourVote(data.yourVote);
      })
      .catch(() => {});
  }, [poll.id]);

  // Countdown re-render every 5s
  useEffect(() => {
    const id = setInterval(() => setTick((v) => v + 1), 5000);
    return () => clearInterval(id);
  }, []);

  // Poll for fresh results while showing results
  useEffect(() => {
    if (!showResults) return;
    pollingRef.current = setInterval(() => {
      fetch(`/api/polls/${poll.id}`)
        .then((r) => r.json())
        .then((data) => {
          if (data.poll) setPoll(data.poll);
        })
        .catch(() => {});
    }, 5000);
    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [showResults, poll.id]);

  async function vote(optionIndex: number) {
    if (closed || yourVote !== null) return;
    setSubmitting(optionIndex);
    setError(null);
    try {
      const voterId = getVoterId();
      const res = await fetch(`/api/polls/${poll.id}/vote`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ voterId, optionIndex }),
      });
      const json = await res.json();
      if (!res.ok) {
        if (json.error === "already_voted") {
          // Sync state and fall through to results
          const r2 = await fetch(`/api/polls/${poll.id}?voterId=${encodeURIComponent(voterId)}`);
          const d2 = await r2.json();
          if (d2.poll) setPoll(d2.poll);
          if (typeof d2.yourVote === "number") setYourVote(d2.yourVote);
          return;
        }
        throw new Error(humanError(json.error));
      }
      if (json.poll) setPoll(json.poll);
      if (typeof json.yourVote === "number") setYourVote(json.yourVote);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(null);
    }
  }

  const totalVotes = poll.total_votes;
  const winning = useMemo(() => {
    if (totalVotes === 0) return -1;
    let max = -1;
    let idx = -1;
    poll.tallies.forEach((n, i) => {
      if (n > max) {
        max = n;
        idx = i;
      }
    });
    return idx;
  }, [poll, totalVotes]);

  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap mb-4">
        <span className={`tag ${closed ? "tag-closed" : "tag-live"}`}>
          {!closed && <span className="dot dot-live" />}
          {/* re-evaluate label using tick */}
          {(() => { void tick; return timeLeft(poll.ends_at).label; })()}
        </span>
        <span className="tag">
          {totalVotes} {totalVotes === 1 ? "vote" : "votes"}
        </span>
        {yourVote !== null && !closed && <span className="tag">your vote · #{yourVote + 1}</span>}
      </div>

      <h1 className="font-display text-3xl md:text-5xl tracking-tightest leading-[1.05] mb-6">
        {poll.question}
      </h1>

      <div className="grid grid-cols-1 gap-3">
        {poll.options.map((opt, i) => {
          if (showResults) {
            const count = poll.tallies[i] ?? 0;
            const pct = totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);
            const isYours = yourVote === i;
            const isWinning = winning === i && totalVotes > 0;
            return (
              <div key={i} className={`bar-track ${isYours ? "pop" : ""}`}>
                <div
                  className="bar-fill"
                  data-selected={isYours ? "true" : "false"}
                  data-winning={isWinning && !isYours ? "true" : "false"}
                  style={{ width: `${Math.max(pct, totalVotes === 0 ? 0 : 4)}%` }}
                />
                <div className="bar-content">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-display text-graphite osnums w-7 shrink-0">#{i + 1}</span>
                    <span className="truncate text-[15px] md:text-base">{opt}</span>
                    {isYours && (
                      <span className="ml-2 text-[11px] uppercase tracking-[0.18em] text-coralDeep">your pick</span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2 shrink-0">
                    <span className="font-display osnums text-xl md:text-2xl">{pct}%</span>
                    <span className="text-mute text-sm numerals">{count}</span>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <button
              key={i}
              className="opt"
              onClick={() => vote(i)}
              disabled={submitting !== null}
              data-selected={false}
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="font-display osnums text-graphite w-7 shrink-0">#{i + 1}</span>
                <span className="truncate">{opt}</span>
              </span>
              <span className="text-mute text-sm">
                {submitting === i ? "Voting…" : "Vote →"}
              </span>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mt-4 text-coralDeep text-sm bg-coral/10 rounded-md px-3 py-2">{error}</p>
      )}

      <div className="mt-8">
        <ShareBar url={shareUrl} />
      </div>
    </div>
  );
}

function humanError(code: string | undefined) {
  switch (code) {
    case "not_found":
      return "This poll no longer exists.";
    case "ended":
      return "This poll has ended.";
    case "bad_option":
      return "That option is not valid.";
    default:
      return code ?? "Something went wrong";
  }
}
