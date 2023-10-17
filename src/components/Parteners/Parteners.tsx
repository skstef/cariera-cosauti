import React from "react";
import styles from "./Parteners.module.scss";
import Image from "next/image";

const partenersList = [
  "/images/partener_4.webp",
  "/images/partener_10.webp",
  "/images/partener_3.webp",
  "/images/partener_8.webp",
  "/images/partener_2.webp",
  "/images/partener_9.webp",
  "/images/partener_7.webp",
  "/images/partener_11.webp",
  "/images/partener_6.webp",

  "/images/partener_5.webp",
  "/images/partener_1.webp",
  "/images/partener_12.webp",
];

export const Parteners = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>Parteneri</h3>
      </div>

      <p className={styles.sectionSubTitle}>
        Construim împreună baze solide pentru un viitor durabil
      </p>

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
