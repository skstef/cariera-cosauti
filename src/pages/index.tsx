import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { FirstSection } from "@/components/FirstSection/FirstSection";
import { AboutUs } from "@/components/AboutUs/AboutUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cariera Cosăuți</title>
        <meta
          name="description"
          content="SA „Cariera de Granit și Pietriș din Soroca” este situată pe versantul drept al terasei inundate a râului Nistru, la o distanță de 0,5 km est de satul Cosăuți, raionul Soroca, RM."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Header />
      <main>
        <FirstSection />
        <AboutUs />
      </main>
    </>
  );
}
