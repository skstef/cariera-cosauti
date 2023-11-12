import React from "react";
import styles from "./FirstSection.module.scss";
import Image from "next/image";
import { Button, useMediaQuery } from "@mui/material";
import Router from "next/router";
import { useTranslation } from "next-i18next";

export const FirstSection = () => {
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const { t } = useTranslation("index");

  const viewProduction = () => {
    Router.push("/#production");
  };

  return (
    <section className={styles.section}>
      {isDesktop ? (
        <Image
          loading="eager"
          className={styles.sectionImage}
          src={"/images/main.webp"}
          alt={"Cariera Cosăuți"}
          width={1920}
          height={1085}
        />
      ) : (
        <Image
          loading="eager"
          className={styles.sectionImage}
          src={"/images/mainTablet.webp"}
          alt={"Cariera Cosăuți"}
          width={1920}
          height={1085}
        />
      )}

      <div className={styles.textBoxWrapper}>
        <div className={styles.textBox}>
          <h1>
            Cariera <span>Cosăuți</span>
          </h1>
          <h2>{t("firstSection_subTitle")}</h2>
        </div>

        <Button
          onClick={viewProduction}
          className={styles.goToProductionBtn}
          variant="contained"
        >
          {t("firstSection_btn")}
        </Button>
      </div>
    </section>
  );
};
