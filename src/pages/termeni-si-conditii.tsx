import Head from "next/head";
import { Footer } from "@/components/shared/Footer/Footer";
import { Header } from "@/components/shared/Header/Header";
import React from "react";
import { TermsOfUse } from "@/components/termeni-si-conditii/TermsOfUse/TermsOfUse";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TermsOfUsePage = () => {
  return (
    <>
      <Head>
        <title>Termeni și condiții</title>
      </Head>
      <Header />
      <main>
        <TermsOfUse />
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: await serverSideTranslations(locale, [
      "terms-and-conditions",
      "common",
    ]),
  };
}

export default TermsOfUsePage;
