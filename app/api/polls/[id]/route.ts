import { NextResponse } from "next/server";
import { getPoll, getVote } from "@/lib/polls";

export const dynamic = "force-dynamic";

export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const url = new URL(req.url);
  const voterId = url.searchParams.get("voterId") ?? undefined;
  try {
    const poll = await getPoll(id);
    if (!poll) return NextResponse.json({ error: "not_found" }, { status: 404 });
    const yourVote = voterId ? await getVote(id, voterId) : null;
    return NextResponse.json({ poll, yourVote });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 },
    );
  }
}
