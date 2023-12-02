import React from "react";
import styles from "./FirstSection.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";
import Router from "next/router";
import { useTranslation } from "next-i18next";
import cx from "classnames";

export const FirstSection = () => {
  const { t } = useTranslation("index");

  const viewProduction = () => {
    Router.push("/#production");
  };

  return (
    <section className={styles.section}>
      <>
        <Image
          loading="eager"
          className={cx(styles.sectionImage, "visibleOn1100AndMore")}
          src={"/images/main.webp"}
          alt={"Cariera Cosăuți"}
          width={1920}
          height={1085}
        />

        <Image
          loading="eager"
          className={cx(styles.sectionImage, "visibleBetween500And1100")}
          src={"/images/mainTablet.webp"}
          alt={"Cariera Cosăuți"}
          width={1920}
          height={1085}
        />

        <Image
          loading="eager"
          className={cx(styles.sectionImage, "visibleOn500AndLess")}
          src={"/images/mainMobile.webp"}
          alt={"Cariera Cosăuți"}
          width={360}
          height={590}
        />
      </>

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
