export default function CVPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">CV</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Downloadable professional resume.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-600">
            The CV will be managed as a PDF in the CMS and linked here from the live site.
            This page can also include a short summary of the document and any key listings.
          </p>
        </section>

        <section className="rounded-3xl border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold">Available as a PDF</h2>
          <p className="mt-4 text-zinc-600 leading-8">
            Once connected to Sanity, the CV page will render the latest uploaded PDF and allow
            visitors to download it directly.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-full border border-black px-6 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
            >
              Download CV
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
