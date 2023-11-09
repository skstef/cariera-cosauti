import Head from "next/head";
import { Footer } from "@/components/shared/Footer/Footer";
import { Header } from "@/components/shared/Header/Header";
import React from "react";
import { TermsOfUse } from "@/components/termeni-si-conditii/TermsOfUse/TermsOfUse";

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

export default TermsOfUsePage;
