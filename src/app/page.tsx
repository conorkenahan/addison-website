import { sanityClient, urlFor } from "@/lib/sanity";
import { homepageQuery } from "@/lib/queries";
import { Lightbox } from "@/app/components/Lightbox";

async function getFeatured() {
  return sanityClient.fetch(homepageQuery);
}

export default async function Home() {
  const work = await getFeatured();

  const images = work?.image
    ? [{ src: urlFor(work.image).width(2400).url(), alt: work.title ?? "Featured work" }]
    : [];

  return (
    <main className="px-10 py-16 max-w-3xl h-screen flex flex-col justify-center">
      {images.length > 0 && (
        <div className="space-y-4 min-h-0">
          <Lightbox images={images} constrainHeight />
          {work.title && (
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{work.title}</p>
          )}
        </div>
      )}
    </main>
  );
}
