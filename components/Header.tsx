import Link from "next/link";

export function Header() {
  return (
    <header className="border-b hairline">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Mark />
          <div className="leading-none">
            <div className="font-display tracking-tight text-2xl md:text-[26px]">
              pleb<span className="italic text-coral">i</span>
            </div>
            <div className="eyebrow mt-1">quick polls, shared instantly</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[14px] text-graphite">
          <a href="#how" className="hover:text-ink">How it works</a>
          <Link href="/" className="btn btn-ghost">All polls</Link>
        </nav>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect x="2" y="2" width="32" height="32" rx="8" fill="#1a1a1f" />
      <rect x="8" y="20" width="4" height="8" rx="1" fill="#ff5a3c" />
      <rect x="14" y="14" width="4" height="14" rx="1" fill="#ffb6a3" />
      <rect x="20" y="10" width="4" height="18" rx="1" fill="#fff" />
      <rect x="26" y="17" width="4" height="11" rx="1" fill="#ffb6a3" />
    </svg>
  );
}
