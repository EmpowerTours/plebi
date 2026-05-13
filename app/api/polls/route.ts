import { NextResponse } from "next/server";
import { createPoll, listPolls } from "@/lib/polls";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const polls = await listPolls(20);
    return NextResponse.json({ polls });
  } catch (err) {
    return NextResponse.json({ error: errorMessage(err) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }
  const { question, options, durationHours } = (body ?? {}) as {
    question?: unknown;
    options?: unknown;
    durationHours?: unknown;
  };

  if (typeof question !== "string" || question.trim().length === 0) {
    return NextResponse.json({ error: "question is required" }, { status: 400 });
  }
  if (question.trim().length > 240) {
    return NextResponse.json({ error: "question is too long (240 chars max)" }, { status: 400 });
  }
  if (!Array.isArray(options)) {
    return NextResponse.json({ error: "options must be an array" }, { status: 400 });
  }
  const cleaned = options
    .map((o) => (typeof o === "string" ? o.trim() : ""))
    .filter((s) => s.length > 0);
  if (cleaned.length < 2 || cleaned.length > 8) {
    return NextResponse.json({ error: "Provide between 2 and 8 options" }, { status: 400 });
  }
  if (cleaned.some((s) => s.length > 80)) {
    return NextResponse.json({ error: "Each option must be 80 chars or fewer" }, { status: 400 });
  }
  const hours = Number(durationHours);
  if (!Number.isFinite(hours) || hours < 0.1 || hours > 30 * 24) {
    return NextResponse.json({ error: "durationHours must be between 0.1 and 720" }, { status: 400 });
  }

  try {
    const poll = await createPoll({ question, options: cleaned, durationHours: hours });
    return NextResponse.json({ poll }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: errorMessage(err) }, { status: 500 });
  }
}

function errorMessage(err: unknown) {
  return err instanceof Error ? err.message : "Unknown error";
}
