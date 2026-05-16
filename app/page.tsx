import { Header } from "@/components/Header";
import { CreatePollForm } from "@/components/CreatePollForm";
import { RecentPolls } from "@/components/RecentPolls";
import { getDictionary } from "@/lib/i18n/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { t } = await getDictionary();
  return (
    <main className="min-h-dvh">
      <Header />

      <section className="hero-stripe border-b hairline">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-14 md:py-20">
          <div className="eyebrow">{t.home.eyebrow}</div>
          <h1 className="font-display tracking-tightest leading-[0.95] mt-5 text-[44px] md:text-[88px] max-w-[18ch]">
            {t.home.titleA} <span className="italic text-coral">{t.home.titleB}</span>
          </h1>
          <p className="mt-6 max-w-[60ch] text-graphite text-lg md:text-xl leading-relaxed">
            {t.home.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 md:px-8 py-12">
        <CreatePollForm />
      </section>

      <section className="mx-auto max-w-[1100px] px-5 md:px-8 pb-12">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="eyebrow">{t.home.recentEyebrow}</div>
            <h2 className="font-display text-3xl tracking-tight mt-2">{t.home.recentTitle}</h2>
          </div>
        </div>
        <RecentPolls />
      </section>

      <section id="how" className="border-t hairline bg-paperWarm">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-14">
          <div className="eyebrow">{t.home.howEyebrow}</div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <Step n="1" title={t.home.step1Title}>{t.home.step1Body}</Step>
            <Step n="2" title={t.home.step2Title}>{t.home.step2Body}</Step>
            <Step n="3" title={t.home.step3Title}>{t.home.step3Body}</Step>
          </div>
        </div>
      </section>

      <footer className="border-t hairline">
        <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-3 text-sm text-mute">
          <span>plebi · © 2025 EmpowerTours SAS</span>
          <span className="font-mono">{t.home.footerMade}</span>
        </div>
      </footer>
    </main>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6">
      <div className="flex items-baseline gap-3">
        <span className="font-display osnums text-coral text-4xl leading-none">{n}.</span>
        <span className="font-display text-2xl tracking-tight">{title}</span>
      </div>
      <p className="mt-3 text-graphite leading-relaxed">{children}</p>
    </div>
  );
}
