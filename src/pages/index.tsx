import Head from "next/head";
import { Header } from "@/components/Header/Header";
import { FirstSection } from "@/components/FirstSection/FirstSection";
import { AboutUs } from "@/components/AboutUs/AboutUs";
import { Footer } from "@/components/Footer/Footer";
import { Production } from "@/components/Production/Production";
import { Galery } from "@/components/Galery/Galery";
import { Politics } from "@/components/Politics/Politics";
import { ResourcesAvailability } from "@/components/ResourcesAvailability/ResourcesAvailability";
import { Certificates } from "@/components/Certificates/Certificates";
import { Parteners } from "@/components/Parteners/Parteners";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { HumanResources } from "@/components/HumanResources/HumanResources";

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
        <Production />
        <Galery />
        <Politics />
        <ResourcesAvailability />
        <Certificates />
        <HumanResources />
        <Parteners />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
