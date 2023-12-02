import React from "react";
import styles from "./AboutUs.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";
import Router from "next/router";
import { useTranslation } from "next-i18next";

export const AboutUs = () => {
  const { t } = useTranslation("index");

  const viewMoreDetails = () => {
    Router.push("/about-us");
  };

  return (
    <section id="about_us" className={styles.section}>
      <div className={styles.left}>
        <div className={styles.aboutUsHeader}>
          <h3>{t("aboutUs_title")}</h3>
        </div>
        <p>
          {t("aboutUs_contentLine1")}
          <br />
          <br />
          {t("aboutUs_contentLine2")}
        </p>

        <Button
          onClick={viewMoreDetails}
          variant="contained"
          className={styles.btn}
        >
          {t("aboutUs_btn")}
        </Button>
      </div>
      <div className={styles.image}>
        <>
          <Image
            src="/images/about.webp"
            alt="Despre noi"
            width={966}
            height={518}
            className="visibleOn1100AndMore"
          />

          <Image
            src="/images/aboutTablet.webp"
            alt="Despre noi"
            width={720}
            height={390}
            className="visibleBetween500And1100"
          />

          <Image
            src="/images/aboutMobile.webp"
            alt="Despre noi"
            width={328}
            height={197}
            className="visibleOn500AndLess"
          />
        </>
      </div>
    </section>
  );
};
