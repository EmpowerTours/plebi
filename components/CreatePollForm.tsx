"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const DURATIONS: { label: string; hours: number }[] = [
  { label: "1 hour", hours: 1 },
  { label: "24 hours", hours: 24 },
  { label: "7 days", hours: 24 * 7 },
  { label: "30 days", hours: 24 * 30 },
];

export function CreatePollForm() {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [hours, setHours] = useState(24);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateOption(i: number, v: string) {
    setOptions((prev) => prev.map((o, idx) => (idx === i ? v : o)));
  }
  function addOption() {
    if (options.length >= 8) return;
    setOptions((prev) => [...prev, ""]);
  }
  function removeOption(i: number) {
    if (options.length <= 2) return;
    setOptions((prev) => prev.filter((_, idx) => idx !== i));
  }

  const cleaned = options.map((o) => o.trim()).filter(Boolean);
  const canSubmit =
    question.trim().length > 0 &&
    question.trim().length <= 240 &&
    cleaned.length >= 2 &&
    cleaned.every((s) => s.length <= 80) &&
    !submitting;

  async function submit() {
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/polls", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question, options: cleaned, durationHours: hours }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to create poll");
      router.push(`/p/${json.poll.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  }

  return (
    <div className="card p-6 md:p-8">
      <div className="eyebrow">New poll</div>
      <label className="block mt-4">
        <span className="sr-only">Question</span>
        <input
          className="input text-lg md:text-xl"
          placeholder="What should we name the project?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={240}
        />
      </label>

      <div className="mt-6 flex flex-col gap-2">
        {options.map((opt, i) => (
          <div key={i} className="option-row">
            <span className="text-mute text-sm w-6 text-center">{i + 1}</span>
            <input
              className="input"
              placeholder={`Option ${i + 1}`}
              value={opt}
              onChange={(e) => updateOption(i, e.target.value)}
              maxLength={80}
            />
            <button
              type="button"
              onClick={() => removeOption(i)}
              className="btn-ghost btn px-3 py-2 text-mute"
              aria-label="Remove option"
              disabled={options.length <= 2}
              title={options.length <= 2 ? "At least 2 options required" : "Remove option"}
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addOption}
          className="self-start mt-1 text-coral text-sm font-medium hover:underline"
          disabled={options.length >= 8}
        >
          + Add option{options.length >= 8 && " (max 8)"}
        </button>
      </div>

      <div className="mt-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex flex-col gap-2 md:flex-1">
          <span className="eyebrow">Closes after</span>
          <div className="flex flex-wrap gap-2">
            {DURATIONS.map((d) => (
              <button
                key={d.hours}
                type="button"
                onClick={() => setHours(d.hours)}
                className={`btn ${hours === d.hours ? "btn-primary" : "btn-ghost"}`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
        <button onClick={submit} className="btn btn-accent text-base px-7 py-4" disabled={!canSubmit}>
          {submitting ? "Creating…" : "Create poll →"}
        </button>
      </div>

      {error && (
        <p className="mt-4 text-coralDeep text-sm bg-coral/10 rounded-md px-3 py-2">{error}</p>
      )}
    </div>
  );
}
