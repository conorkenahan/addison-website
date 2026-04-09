import { sanityClient, urlFor } from "@/lib/sanity";

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

  return (
    <main className="px-10 py-16 max-w-3xl">
      <div className="mb-10 space-y-2">
        <h2 className="text-xs uppercase tracking-[0.25em] text-zinc-900">"{show.title}"</h2>
        {meta && <p className="text-xs text-zinc-500">{meta}</p>}
      </div>
      <div className="space-y-16">
        {show.artworks?.map((item: any) => (
          <article key={item._key} className="space-y-3">
            {item.asset && (
              <img
                src={urlFor({ asset: item.asset }).width(1600).url()}
                alt={item.title ?? "Artwork"}
                className="w-full object-cover"
              />
            )}
            {(item.title || item.date || item.medium) && (
              <p className="text-xs text-zinc-900 leading-6">
                {[item.title, item.medium, item.date].filter(Boolean).join(", ")}
              </p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
