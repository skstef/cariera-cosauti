import React from "react";
import styles from "./FirstSection.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";
import Router from "next/router";

export const FirstSection = () => {
  const viewProduction = () => {
    Router.push("/#production");
  };

  return (
    <section className={styles.section}>
      <Image
        className={styles.sectionImage}
        src={"/images/main.webp"}
        alt={"Cariera Cosăuți"}
        width={1920}
        height={1085}
      />

      <div className={styles.textBoxWrapper}>
        <div className={styles.textBox}>
          <h1>
            Cariera <span>Cosăuți</span>
          </h1>
          <h3>Noi creăm baza viitorului</h3>
        </div>

        <Button
          onClick={viewProduction}
          className={styles.goToProductionBtn}
          variant="contained"
        >
          Vezi producția
        </Button>
      </div>
    </section>
  );
};
