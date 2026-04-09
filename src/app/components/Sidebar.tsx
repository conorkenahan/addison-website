"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Show {
  _id: string;
  title: string;
}

interface SidebarProps {
  shows: Show[];
}

export function Sidebar({ shows }: SidebarProps) {
  const pathname = usePathname();
  const onWorksPage = pathname === "/works" || pathname.startsWith("/works/");
  const [worksOpen, setWorksOpen] = useState(onWorksPage);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = "text-xs uppercase tracking-[0.25em] text-zinc-900";

  const navItems = (
    <>
      <div>
        <span
          onClick={() => setWorksOpen((o) => !o)}
          className={`${linkClass} cursor-pointer`}
        >
          Works
        </span>
        {shows.length > 0 && (
          <ul
            className={`ml-4 flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
              worksOpen ? "max-h-96 mt-3 opacity-100" : "max-h-0 mt-0 opacity-0"
            }`}
          >
            {shows.map((show) => (
              <li key={show._id}>
                <Link
                  href={`/works/${show._id}`}
                  className={linkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {show.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link href="/writing" className={linkClass} onClick={() => setMobileOpen(false)}>
        Writing
      </Link>

      <Link href="/about" className={linkClass} onClick={() => setMobileOpen(false)}>
        About
      </Link>

      <Link href="/cv" className={linkClass} onClick={() => setMobileOpen(false)}>
        CV
      </Link>
    </>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-background border-b border-border flex items-center justify-between px-6 h-12">
        <Link href="/" className={linkClass}>
          Addison Bale
        </Link>
        <span
          onClick={() => setMobileOpen((o) => !o)}
          className={`${linkClass} cursor-pointer`}
        >
          {mobileOpen ? "Close" : "Menu"}
        </span>
      </div>

      {/* Mobile dropdown — always mounted, slides in/out */}
      <div
        className={`md:hidden fixed top-12 left-0 right-0 z-20 bg-background border-b border-border px-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 pt-6 pb-8 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {navItems}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-72 flex-col px-6 py-10 border-r border-border bg-background z-20">
        <Link href="/" className={linkClass}>
          Addison Bale
        </Link>
        <nav className="mt-10 flex flex-col gap-5">{navItems}</nav>
      </aside>
    </>
  );
}
