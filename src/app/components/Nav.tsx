import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-900">
          Addison Bale
        </Link>
        <nav className="flex gap-8 text-sm uppercase tracking-[0.35em] text-zinc-900">
          <Link href="/bio">Bio</Link>
          <Link href="/works">Works</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/cv">CV</Link>
        </nav>
      </div>
    </header>
  );
}
