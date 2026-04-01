import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.32em] text-zinc-900">
          Addison
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-zinc-600">
          <Link href="/bio" className="transition hover:text-black">
            Bio
          </Link>
          <Link href="/cv" className="transition hover:text-black">
            CV
          </Link>
          <Link href="/works" className="transition hover:text-black">
            Selected Works
          </Link>
          <Link href="/writing" className="transition hover:text-black">
            Writing
          </Link>
        </nav>
      </div>
    </header>
  );
}
