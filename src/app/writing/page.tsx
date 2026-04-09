import { sanityClient } from "@/lib/sanity";
import { featuredWritingQuery, writingQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";

async function getFeatured() {
  return sanityClient.fetch(featuredWritingQuery);
}

async function getWriting() {
  return sanityClient.fetch(writingQuery);
}

export default async function WritingPage() {
  const [featured, pieces] = await Promise.all([getFeatured(), getWriting()]);

  return (
    <main className="px-10 py-16 max-w-3xl">
      {/* Featured piece */}
      {featured && (
        <section className="mb-20">
          <h1 className="text-base mb-6">{featured.title}</h1>
          <div className="max-h-[32rem] overflow-y-auto pr-4 text-sm leading-8 text-zinc-700 space-y-4">
            {featured.body ? (
              <PortableText value={featured.body} />
            ) : (
              <p className="text-zinc-400 italic">No body text yet.</p>
            )}
          </div>
        </section>
      )}

      {/* Published works list */}
      {pieces?.length > 0 && (
        <section>
          <ul className="space-y-2">
            {pieces.map((item: any) => {
              const parts = [
                item.year,
                item.type,
                item.title,
                item.publication,
                item.date,
              ].filter(Boolean).join(", ");

              return (
                <li key={item._id} className="text-sm text-zinc-900 leading-7">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 decoration-zinc-400"
                    >
                      {parts}
                    </a>
                  ) : (
                    <span>{parts}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {!featured && !pieces?.length && (
        <p className="text-sm text-zinc-500">No writing available yet.</p>
      )}
    </main>
  );
}
