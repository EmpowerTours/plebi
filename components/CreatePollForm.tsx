"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useT } from "@/lib/i18n/I18nProvider";

export function CreatePollForm() {
  const t = useT();
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [hours, setHours] = useState(24);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const durations = useMemo(
    () => [
      { label: t.create.duration1h, hours: 1 },
      { label: t.create.duration24h, hours: 24 },
      { label: t.create.duration7d, hours: 24 * 7 },
      { label: t.create.duration30d, hours: 24 * 30 },
    ],
    [t],
  );

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
      if (!res.ok) throw new Error(json.error ?? t.create.failedCreate);
      router.push(`/p/${json.poll.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.create.somethingWrong);
      setSubmitting(false);
    }
  }

  return (
    <div className="card p-6 md:p-8">
      <div className="eyebrow">{t.create.newPoll}</div>
      <label className="block mt-4">
        <span className="sr-only">{t.create.questionLabel}</span>
        <input
          className="input text-lg md:text-xl"
          placeholder={t.create.questionPlaceholder}
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
              placeholder={`${t.create.optionPlaceholder} ${i + 1}`}
              value={opt}
              onChange={(e) => updateOption(i, e.target.value)}
              maxLength={80}
            />
            <button
              type="button"
              onClick={() => removeOption(i)}
              className="btn-ghost btn px-3 py-2 text-mute"
              aria-label={t.create.removeOption}
              disabled={options.length <= 2}
              title={options.length <= 2 ? t.create.removeOptionMin : t.create.removeOption}
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
          {options.length >= 8 ? t.create.addOptionMax : t.create.addOption}
        </button>
      </div>

      <div className="mt-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex flex-col gap-2 md:flex-1">
          <span className="eyebrow">{t.create.closesAfter}</span>
          <div className="flex flex-wrap gap-2">
            {durations.map((d) => (
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
          {submitting ? t.create.creating : t.create.create}
        </button>
      </div>

      {error && (
        <p className="mt-4 text-coralDeep text-sm bg-coral/10 rounded-md px-3 py-2">{error}</p>
      )}
    </div>
  );
}
