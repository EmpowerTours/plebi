import { NextResponse } from "next/server";
import { castVote, getPoll } from "@/lib/polls";

export const dynamic = "force-dynamic";

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }
  const { voterId, optionIndex } = (body ?? {}) as {
    voterId?: unknown;
    optionIndex?: unknown;
  };
  if (typeof voterId !== "string" || voterId.length < 8 || voterId.length > 128) {
    return NextResponse.json({ error: "voterId is required" }, { status: 400 });
  }
  const idx = Number(optionIndex);
  if (!Number.isInteger(idx) || idx < 0) {
    return NextResponse.json({ error: "optionIndex must be a non-negative integer" }, { status: 400 });
  }

  try {
    const result = await castVote({ pollId: id, voterId, optionIndex: idx });
    if (!result.ok) {
      const status = result.reason === "not_found" ? 404 : 400;
      return NextResponse.json({ error: result.reason }, { status });
    }
    const poll = await getPoll(id);
    return NextResponse.json({ poll, yourVote: idx });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 },
    );
  }
}
