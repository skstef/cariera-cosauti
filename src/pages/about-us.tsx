import Head from "next/head";
import { Header } from "@/components/shared/Header/Header";
import React from "react";
import { Footer } from "@/components/shared/Footer/Footer";
import { Mission } from "@/components/about-us/Mission/Mission";
import { Video } from "@/components/about-us/Video/Video";
import { AboutCompany } from "@/components/about-us/AboutCompany/AboutCompany";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutUs = () => {
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
        <AboutCompany />
        <Video />
        <Mission />
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: await serverSideTranslations(locale, ["about-us", "common"]),
  };
}

export default AboutUs;
