import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Sidebar } from "./components/Sidebar";
import { sanityClient } from "@/lib/sanity";
import { showsQuery } from "@/lib/queries";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistMono.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground">
        <Sidebar shows={shows ?? []} />
        {/* Offset for desktop sidebar / mobile top bar */}
        <div className="md:ml-72 pt-12 md:pt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
