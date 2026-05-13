import { Header } from "@/components/Header";
import { CreatePollForm } from "@/components/CreatePollForm";
import { RecentPolls } from "@/components/RecentPolls";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Header />

      <section className="hero-stripe border-b hairline">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-14 md:py-20">
          <div className="eyebrow">A poll in 10 seconds</div>
          <h1 className="font-display tracking-tightest leading-[0.95] mt-5 text-[44px] md:text-[88px] max-w-[18ch]">
            Ask the room. <span className="italic text-coral">Get an answer.</span>
          </h1>
          <p className="mt-6 max-w-[60ch] text-graphite text-lg md:text-xl leading-relaxed">
            Type a question, list a few options, hit create. Share the link. Watch the votes pour in,
            live. No accounts, no fluff — just polls that actually work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 md:px-8 py-12">
        <CreatePollForm />
      </section>

      <section className="mx-auto max-w-[1100px] px-5 md:px-8 pb-12">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="eyebrow">Recent</div>
            <h2 className="font-display text-3xl tracking-tight mt-2">All polls</h2>
          </div>
        </div>
        <RecentPolls />
      </section>

      <section id="how" className="border-t hairline bg-paperWarm">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-14">
          <div className="eyebrow">How it works</div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <Step n="1" t="Write your question">
              Up to 240 characters. Two to eight options. Pick how long it stays open.
            </Step>
            <Step n="2" t="Share the link">
              Each poll gets its own URL and QR code. Drop it in chat, on a slide, anywhere.
            </Step>
            <Step n="3" t="Watch live results">
              One vote per browser. Results update in real-time, with a clear running leader.
            </Step>
          </div>
        </div>
      </section>

      <footer className="border-t hairline">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-3 text-sm text-mute">
          <span>plebi · open source · MIT</span>
          <span className="font-mono">made simple</span>
        </div>
      </footer>
    </main>
  );
}

function Step({ n, t, children }: { n: string; t: string; children: React.ReactNode }) {
  return (
    <div className="card p-6">
      <div className="flex items-baseline gap-3">
        <span className="font-display osnums text-coral text-4xl leading-none">{n}.</span>
        <span className="font-display text-2xl tracking-tight">{t}</span>
      </div>
      <p className="mt-3 text-graphite leading-relaxed">{children}</p>
    </div>
  );
}
