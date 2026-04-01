import Link from "next/link";
import { Nav } from "./components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto flex max-w-5xl flex-1 flex-col gap-10 px-6 py-12 sm:px-10">
        <section className="space-y-8 border-b border-zinc-200 pb-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Artist portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Clean, minimal structure for writing, artwork, and a CV archive.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600">
              A simple professional home for selected works organized by year, a writing archive,
              and a downloadable CV. This build follows the inspiration of quiet, editorial artist
              websites with strong typographic hierarchy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Link href="/bio" className="rounded-3xl border border-zinc-200 p-6 transition hover:border-black/30 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Bio</p>
              <h2 className="mt-4 text-xl font-semibold">About the artist</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                A concise profile with background, statement, and contact details.
              </p>
            </Link>
            <Link href="/works" className="rounded-3xl border border-zinc-200 p-6 transition hover:border-black/30 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Selected Works</p>
              <h2 className="mt-4 text-xl font-semibold">Organized by year</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Visual work laid out in a clean archive, with year-based grouping and a calm grid.
              </p>
            </Link>
            <Link href="/writing" className="rounded-3xl border border-zinc-200 p-6 transition hover:border-black/30 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Writing</p>
              <h2 className="mt-4 text-xl font-semibold">Essays & texts</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                A simple writing archive for statements, published text, and creative writing.
              </p>
            </Link>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Download</p>
            <h2 className="mt-4 text-2xl font-semibold">CV</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Add a downloadable PDF CV here so grant reviewers and galleries can access the full resume.
            </p>
            <Link href="/cv" className="mt-6 inline-flex rounded-full border border-black px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white">
              View CV details
            </Link>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Inspiration</p>
            <h2 className="mt-4 text-2xl font-semibold">Minimal editorial layout</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              The structure leans on clean typography, generous spacing, and a quiet palette to keep the work
              center stage.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
