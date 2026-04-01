import Link from "next/link";

export default function BioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Bio</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Professional overview and creative profile.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-600">
            This section will present a concise artist statement, education and background,
            and a clear link to contact information. The layout stays calm and editorial,
            with a strong focus on readability.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-[1fr_180px]">
          <div className="space-y-6 rounded-3xl border border-zinc-200 p-8">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-zinc-600 leading-8">
              Add a short biography here that covers the client’s artistic interests,
              practice, and what he wants the site to communicate when applying for grants.
            </p>
            <p className="text-zinc-600 leading-8">
              This can be edited through the CMS once we connect Sanity, so the site stays
              up to date without redeploying.
            </p>
          </div>
          <div className="space-y-5 rounded-3xl border border-zinc-200 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Quick details</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-600">
                <li>Location: [City, Region]</li>
                <li>Mediums: Writing, painting, visual work</li>
                <li>Contact: [email@example.com]</li>
              </ul>
            </div>
            <Link
              href="/cv"
              className="inline-flex rounded-full border border-black px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              View CV
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
