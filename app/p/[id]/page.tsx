import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { PollVoter } from "@/components/PollVoter";
import { getPoll } from "@/lib/polls";

export const dynamic = "force-dynamic";

export default async function PollPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const poll = await getPoll(id).catch(() => null);
  if (!poll) notFound();

  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("host") ?? "localhost:3000";
  const shareUrl = `${proto}://${host}/p/${poll.id}`;

  return (
    <main className="min-h-dvh">
      <Header />
      <section className="mx-auto max-w-[820px] px-5 md:px-8 py-10 md:py-14">
        <PollVoter initialPoll={poll} shareUrl={shareUrl} />
      </section>
    </main>
  );
}
