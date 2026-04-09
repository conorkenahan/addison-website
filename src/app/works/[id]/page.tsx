import { sanityClient, urlFor } from "@/lib/sanity";
import { Lightbox } from "@/app/components/Lightbox";

async function getShow(id: string) {
  return sanityClient.fetch(
    `*[_type == "show" && _id == $id][0]{
      _id,
      title,
      year,
      curator,
      venue,
      cityState,
      artworks[]{
        _key,
        title,
        date,
        medium,
        asset
      }
    }`,
    { id }
  );
}

export default async function ShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const show = await getShow(id);

  if (!show) {
    return (
      <main className="px-10 py-16 max-w-3xl">
        <p className="text-sm text-zinc-500">Show not found.</p>
      </main>
    );
  }

  const meta = [show.year, show.curator, show.venue, show.cityState].filter(Boolean).join(" : ");

  const images = (show.artworks ?? [])
    .filter((item: any) => item.asset)
    .map((item: any) => ({
      src: urlFor({ asset: item.asset }).width(2400).url(),
      alt: item.title ?? "Artwork",
      caption: [item.title, item.medium, item.date].filter(Boolean).join(", "),
    }));

  return (
    <main className="px-10 py-16 max-w-3xl">
      <div className="mb-10 space-y-2">
        <h2 className="text-xs uppercase tracking-[0.25em] text-zinc-900">"{show.title}"</h2>
        {meta && <p className="text-xs text-zinc-500">{meta}</p>}
      </div>
      <Lightbox images={images} />
    </main>
  );
}
