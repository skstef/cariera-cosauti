import React from "react";
import styles from "./Politics.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

export const Politics = () => {
  const { t } = useTranslation("index");

  const isDesktop = useMediaQuery("(min-width:1100px)");

  const politicsList = [
    {
      name: t("policies_cardTitle_1"),
      number: 1,
    },
    {
      name: t("policies_cardTitle_2"),
      number: 2,
    },
    {
      name: t("policies_cardTitle_3"),
      number: 3,
    },
    {
      name: t("policies_cardTitle_4"),
      number: 4,
    },
  ];

  return (
    <section id="policies" className={styles.section}>
      <div className={styles.sectionWrapper}>
        <div className={styles.sectionHeader}>
          <h3>{t("policies_title")}</h3>
          <p>{t("policies_subTitle")}</p>
        </div>

        <div className={styles.cardsWrapper}>
          {politicsList.map((el) => {
            return (
              <div key={el.number} className={styles.card}>
                <p className={styles.cardNumber}>{el.number}.</p>
                <p className={styles.cardTitle}>{el.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {isDesktop ? (
        <Image
          className={styles.sectionImage}
          src="/images/politics.webp"
          width={1920}
          height={732}
          alt="Politicile de bază"
        />
      ) : (
        <Image
          className={styles.sectionImage}
          src="/images/politicsTablet.webp"
          width={1920}
          height={732}
          alt="Politicile de bază"
        />
      )}
    </section>
  );
};
