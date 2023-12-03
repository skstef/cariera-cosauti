import React from "react";
import styles from "./Parteners.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const partenersList = [
  "/images/partener_5.webp",
  "/images/partener_1.webp",
  "/images/partener_3.webp",
  "/images/partener_11.webp",
];

export const Parteners = () => {
  const { t } = useTranslation("index");

  return (
    <section id="parteners" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{t("parteners_title")}</h3>
        <p>{t("parteners_subTitle")}</p>
      </div>

      <div className={styles.partenersGrid}>
        {partenersList.map((el) => (
          <div key={el} className={styles.imageContainer}>
            <Image src={el} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
    </section>
  );
};
