import type { Metadata } from "next";
import { IBM_Plex_Sans, Roboto_Mono } from "next/font/google";
import { Sidebar } from "./components/Sidebar";
import { sanityClient } from "@/lib/sanity";
import { showsQuery } from "@/lib/queries";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Addison Bale",
  description:
    "A simple artist portfolio site for writing, selected works, and CV downloads.",
};

async function getShows() {
  return sanityClient.fetch(showsQuery);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shows = await getShows();

  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${robotoMono.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground">
        <Sidebar shows={shows ?? []} />
        <div className="md:ml-72 pt-12 md:pt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
