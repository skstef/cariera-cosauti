import React from "react";
import styles from "./Politics.module.scss";
import Image from "next/image";

const politicsList = [
  {
    name: "Politica personalului",
    number: 1,
  },
  {
    name: "Politica calității",
    number: 2,
  },
  {
    name: "Politica ecologică",
    number: 3,
  },
  {
    name: "Politica investițională",
    number: 4,
  },
];

export const Politics = () => {
  return (
    <section id="policies" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>Politicile de bază</h3>
      </div>

      <p className={styles.sectionSubTitle}>
        Politici solide și responsabile - cheia succesului în activitatea
        noastră
      </p>

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

      <Image
        className={styles.sectionImage}
        src="/images/politics.webp"
        width={1920}
        height={780}
        alt="Politicile de bază"
      />
    </section>
  );
};
