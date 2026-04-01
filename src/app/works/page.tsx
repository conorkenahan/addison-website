export default function WorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Selected Works</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Archive of visual work organized by year.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-600">
            The works section will present selected artwork in a simple chronological structure,
            making it easy for reviewers to scan by year and click through to individual projects.
          </p>
        </section>

        <section className="grid gap-8">
          <div className="rounded-3xl border border-zinc-200 p-8">
            <h2 className="text-2xl font-semibold">2026</h2>
            <p className="mt-3 text-zinc-600 leading-8">Featured works and exhibitions from the current year.</p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-8">
            <h2 className="text-2xl font-semibold">2025</h2>
            <p className="mt-3 text-zinc-600 leading-8">Selected projects, exhibitions, and notable work from 2025.</p>
          </div>
          <div className="rounded-3xl border border-zinc-200 p-8">
            <h2 className="text-2xl font-semibold">2024</h2>
            <p className="mt-3 text-zinc-600 leading-8">A concise archive of work from prior years, organized by date.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
