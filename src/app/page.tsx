import { Header } from "@/app//ui/header";
import { Summary } from "./ui/summary";
import { Experience } from "./ui/experience";
import { Skills } from "./ui/skills";

import "./globals.css";
import { Education } from "./ui/education";
import { Achivements } from "./ui/achievements";
import { Footer } from "./ui/footer";
import Head from "next/head";


export const metadata = {
  title: 'Ilham Fazri - Fullstack Engineer',
  description: 'I’m a full-stack engineer with 4+ years of turning ideas into real, reliable apps — from pixel-perfect frontends to solid backend systems. I love clean code, learning new tech, and building things that actually make life easier.',
  openGraph: {
    title: 'Ilham Fazri - Fullstack Engineer',
    description: 'I’m a full-stack engineer with 4+ years of turning ideas into real, reliable apps — from pixel-perfect frontends to solid backend systems. I love clean code, learning new tech, and building things that actually make life easier.',
    url: 'https://example.com/about',
    siteName: 'Ilham Fazri - Fullstack Engineer',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <link rel="icon" href="/image.png" />
      </Head>
      <Header />
      <main className="flex flex-col items-center w-full max-w-4xl px-3 space-y-10 mx-auto my-10">
        <Summary />
        <Skills />
        <div className="w-full border border-solid border-black/80 border-white/[.145]"></div>
        <Experience />
        <div className="w-full border border-solid border-black/80 border-white/[.145]"></div>
        <Education />
        <div className="w-full border border-solid border-black/80 border-white/[.145]"></div>
        <Achivements />
      </main>
      <div className="w-full border border-solid border-black/80 border-white/[.145]"></div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
