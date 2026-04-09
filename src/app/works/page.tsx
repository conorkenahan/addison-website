import { sanityClient, urlFor } from "@/lib/sanity";
import { worksQuery } from "@/lib/queries";

async function getWorks() {
  return sanityClient.fetch(worksQuery);
}

interface Artwork {
  _key: string;
  title?: string;
  date?: string;
  medium?: string;
  image?: any;
}

interface Show {
  _id: string;
  title: string;
  slug: string;
  artworks?: Artwork[];
}

export default async function WorksPage() {
  const shows: Show[] = await getWorks() ?? [];

  return (
    <main className="px-10 py-16 max-w-3xl">
      {shows.length ? (
        <div className="space-y-24">
          {shows.map((show) => (
            <section key={show._id} id={show.slug} className="scroll-mt-8">
              <h2 className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-10">
                {show.title}
              </h2>
              <div className="space-y-16">
                {show.artworks?.map((item) => (
                  <article key={item._key} className="space-y-3">
                    {item.image && (
                      <img
                        src={urlFor(item.image).width(1600).url()}
                        alt={item.title ?? "Artwork"}
                        className="w-full object-cover"
                      />
                    )}
                    {(item.title || item.date || item.medium) && (
                      <p className="text-xs text-zinc-400 leading-6">
                        {[item.title, item.medium, item.date].filter(Boolean).join(", ")}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500">No works available yet.</p>
      )}
    </main>
  );
}
