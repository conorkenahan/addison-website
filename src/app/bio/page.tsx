import Link from "next/link";
import { sanityClient, urlFor } from "@/lib/sanity";
import { bioQuery } from "@/lib/queries";

const defaultBio = `Hi ✎ My name is Addison Bale.
Welcome to my blog :]

(1994) born and raised in NYC. I am an artist working within a mixed practice of mostly poetry and painting, with particular attention to painting as a source language and scene for poems; poems as a visual cue for, if not generator of paintings. This duality of practice reflects translation, a process that is deeply embedded in my relationship to place, language, and art-making. Having had the opportunity to learn French, then Spanish, and volunteer briefly as an interpreter for people seeking asylum here in New York, I translate as a mode of entry into my own practice and research, translating poetry from Spanish into English, vice-versa, and translating text into painting. As an artist in residence with the Lab Program in Mexico City, I developed a body of poems that came out of a process of translation back and forth between US and Mexican authors, employing translated quotes and interpolation to weave original poems in Spanish, English, and Spanglish. These poems were published by the Lab Program in a chapbook called Galimatias. Some of the poems from this project were published in edition 09 of the Mexican literary journal DiSONARE in 2023. Poems of mine have also been published by Everybody Press, and No Dear. For my portfolio and/or other information about my studio and publications, feel free to reach out to me:`;

async function getBio() {
  return sanityClient.fetch(bioQuery);
}

export default async function BioPage() {
  const bio = await getBio();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Bio</p>
        <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-6xl">
          {bio?.name ?? "About the artist"}
        </h1>
        <div className="mt-10 space-y-8 text-base leading-9 text-zinc-700">
          <p className="whitespace-pre-wrap">{bio?.profile ?? defaultBio}</p>
          <div className="bio-links">
             <p><a href="mailto:sayhey.adi@gmail.com">sayhey.adi@gmail.com</a></p>
             <a href="https://www.instagram.com/addison_bale/">@addison_bale</a>
          </div>
        </div>

        {bio?.headshot && (
          <div className="mt-16">
            <img
              src={urlFor(bio.headshot).width(1200).url()}
              alt={bio.name ?? "Artist headshot"}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="mt-16">
          <Link href="/cv" className="text-sm uppercase tracking-[0.35em] text-zinc-900 underline underline-offset-4 decoration-zinc-900">
            View CV
          </Link>
        </div>
      </main>
    </div>
  );
}
