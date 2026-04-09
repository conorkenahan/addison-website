import { sanityClient, urlFor } from "@/lib/sanity";
import { bioQuery } from "@/lib/queries";

async function getBio() {
  return sanityClient.fetch(bioQuery);
}

export default async function AboutPage() {
  const bio = await getBio();

  return (
    <main className="px-10 py-16 max-w-3xl">
      {bio?.headshot && (
        <div className="mb-10">
          <img
            src={urlFor(bio.headshot).width(600).url()}
            alt={bio.name ?? "Artist"}
            className="w-[300px] object-cover"
          />
        </div>
      )}
      {bio?.profile && (
        <p className="text-sm leading-8 text-zinc-700 whitespace-pre-wrap mb-8">{bio.profile}</p>
      )}
      {bio?.contact?.length > 0 && (
        <ul className="flex flex-col gap-2">
          {bio.contact.map((item: { label: string; url: string }) => (
            <li key={item.url}>
              <a
                href={item.url}
                target={item.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.25em] text-zinc-900 underline underline-offset-4 decoration-zinc-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
