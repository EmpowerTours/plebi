import Link from "next/link";
import { Header } from "@/components/Header";
import { getDictionary } from "@/lib/i18n/server";

export default async function NotFound() {
  const { t } = await getDictionary();
  return (
    <main className="min-h-dvh">
      <Header />
      <section className="mx-auto max-w-[600px] px-5 md:px-8 py-24 text-center">
        <div className="eyebrow">{t.notFoundPage.code}</div>
        <h1 className="font-display text-4xl md:text-5xl tracking-tightest mt-3">
          {t.notFoundPage.title}
        </h1>
        <p className="mt-4 text-graphite text-lg">{t.notFoundPage.body}</p>
        <Link className="btn btn-primary mt-6 inline-flex" href="/">{t.notFoundPage.cta}</Link>
      </section>
    </main>
  );
}
