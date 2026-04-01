export default function WritingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-10">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Writing</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Essays, statements, and writing archive.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-600">
            This section is designed for writing work and project texts. It can support multiple
            entries and allow the client to update pieces through the CMS.
          </p>
        </section>

        <section className="grid gap-6">
          <article className="rounded-3xl border border-zinc-200 p-8">
            <h2 className="text-2xl font-semibold">Selected writing item</h2>
            <p className="mt-3 text-zinc-600 leading-8">
              A brief excerpt can appear here, with links to the full text once the content is
              added in the CMS.
            </p>
          </article>
          <article className="rounded-3xl border border-zinc-200 p-8">
            <h2 className="text-2xl font-semibold">Project statement</h2>
            <p className="mt-3 text-zinc-600 leading-8">
              Each piece can be tagged by year or topic and presented in a calm reading layout.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
