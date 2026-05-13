import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <main className="min-h-dvh">
      <Header />
      <section className="mx-auto max-w-[600px] px-5 md:px-8 py-24 text-center">
        <div className="eyebrow">404</div>
        <h1 className="font-display text-4xl md:text-5xl tracking-tightest mt-3">
          That poll isn&apos;t here.
        </h1>
        <p className="mt-4 text-graphite text-lg">It may have been deleted, or the link is mistyped.</p>
        <Link className="btn btn-primary mt-6 inline-flex" href="/">Create a new poll →</Link>
      </section>
    </main>
  );
}
