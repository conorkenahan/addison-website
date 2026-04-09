import { sanityClient } from "@/lib/sanity";
import { cvQuery } from "@/lib/queries";

async function getCv() {
  return sanityClient.fetch(cvQuery);
}

export default async function CVPage() {
  const cv = await getCv();
  const pdfUrl = cv?.pdf?.asset?.url;

  return (
    <main className="px-10 py-16 max-w-3xl">
      {/* Download link */}
      {pdfUrl && (
        <div className="mb-16">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-zinc-300"
          >
            Download PDF
          </a>
        </div>
      )}

      {/* Structured CV sections */}
      {cv?.sections?.length ? (
        <div className="space-y-14">
          {cv.sections.map((section: any, i: number) => (
            <section key={i}>
              <h2 className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-6">
                {section.heading}
              </h2>
              <ul className="space-y-4">
                {section.entries?.map((entry: any, j: number) => (
                  <li key={j} className="flex gap-8 text-sm">
                    <span className="w-12 shrink-0 text-zinc-400">{entry.year}</span>
                    <span className="text-zinc-700 leading-7 whitespace-pre-wrap">{entry.description}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500">CV content has not been added yet.</p>
      )}
    </main>
  );
}
