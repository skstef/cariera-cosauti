import Head from "next/head";
import { Header } from "@/components/shared/Header/Header";
import { Footer } from "@/components/shared/Footer/Footer";
import { FirstSection } from "@/components/index/FirstSection/FirstSection";
import { AboutUs } from "@/components/index/AboutUs/AboutUs";
import { Production } from "@/components/index/Production/Production";
import { Galery } from "@/components/index/Galery/Galery";
import { Politics } from "@/components/index/Politics/Politics";
import { ResourcesAvailability } from "@/components/index/ResourcesAvailability/ResourcesAvailability";
import { Certificates } from "@/components/index/Certificates/Certificates";
import { Parteners } from "@/components/index/Parteners/Parteners";
import { ContactUs } from "@/components/index/ContactUs/ContactUs";
import { HumanResources } from "@/components/index/HumanResources/HumanResources";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Cariera Cosăuți</title>
        <meta
          name="description"
          content="SA „Cariera de Granit și Pietriș din Soroca” este situată pe versantul drept al terasei inundate a râului Nistru, la o distanță de 0,5 km est de satul Cosăuți, raionul Soroca, RM."
        />
      </Head>
      <Header />
      <main>
        <FirstSection />
        <AboutUs />

        {/* 
        
        <Production />
        <Galery />
        <Politics />
        <ResourcesAvailability />
        <Certificates />
        <HumanResources />
        <Parteners /> */}

        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
