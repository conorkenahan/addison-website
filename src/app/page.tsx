import { sanityClient, urlFor } from "@/lib/sanity";
import { homepageQuery } from "@/lib/queries";

async function getFeatured() {
  return sanityClient.fetch(homepageQuery);
}

export default async function Home() {
  const work = await getFeatured();

  return (
    <main className="px-10 py-16 max-w-3xl">
      {work?.image && (
        <div className="space-y-4">
          <img
            src={urlFor(work.image).width(1600).url()}
            alt={work.title ?? "Featured work"}
            className="w-full object-cover"
          />
          {work.title && (
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{work.title}</p>
          )}
        </div>
      )}
    </main>
  );
}
