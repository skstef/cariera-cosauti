import React from "react";
import styles from "./AboutCompany.module.scss";
import Image from "next/image";

export const AboutCompany = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionWrapper}>
        <div className={styles.left}>
          <div className={styles.sectionHeader}>
            <h3>Despre companie</h3>
          </div>
          <p className={styles.aboutDescription}>
            SA „Cariera de Granit și Pietriș din Soroca” ocupă un loc
            privilegiat în cadrul producătorilor de materiale de construcţii din
            țara noastră. Cariera este situată pe versantul drept al terasei
            inundate a râului Nistru, la o distanță de 0,5 km est de satul
            Cosăuți, raionul Soroca, Republica Moldova.
            <br />
            <br />
            Rocile din zonă prezintă caracteristici, care conferă o calitate
            foarte bună produselor de carieră, acestea corespunzând permanent
            standardelor de calitate.
            <br />
            <br />
            Până în 1970, cariera extrăgea piatră de carieră, care era recoltată
            și încărcată manual în mijloacele de transport. În carieră a fost
            instalat un concasor pentru producerea pietrișului din piatră de
            nisip.
            <br />
            <br />
            Piatra de Cosăuți este un mineral extras pentru producerea pietrei
            de carieră, a gresiei substandard și a produselor arhitecturale și
            decorative.
            <br />
            <br />
            Este remarcabil faptul că piatra de Cosăuți a fost utilizată în
            arhitectura orașelor Soroca, Chișinău și Iași, conferindu-le un
            aspect unic.
            <br />
            <br />
            Piatra de Cosăuți este folosită pe larg de arhitecții din Republica
            Moldova, România, Rusia și Ucraina, pentru a accentua noblețea și
            rafinamentul creațiilor lor.
            <br />
            <br />
            În anul 1970 a fost inițiată o carieră de extragere a granitului,
            care reușește să asigure până în prezent necesitățile domeniului de
            construcții rezidențiale și a drumurilor din Republica Moldova.
            <br />
            <br />
            La 30 mai 1995 întreprinderea a fost transformată în societate pe
            acțiuni, iar în anul 2000 aceasta a fost privatizată prin
            tranzacționare la bursă.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={"/images/calitatea.webp"}
              width={63}
              height={78}
              alt="quality"
            />

            <h5 className={styles.cardTitle}>Calitatea</h5>

            <p className={styles.cardData}>
              Compania acordă o atenție sporită calității produselor finite,
              având în gestiunea sa un laborator acreditat și implementând
              sistemul de management al calității ISO 9001.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={"/images/personalul.webp"}
              width={73}
              height={67}
              alt="staff"
            />

            <h5 className={styles.cardTitle}>Personalul</h5>

            <p className={styles.cardData}>
              {" "}
              Personalul carierei reprezintă o echipă unită de profesioniști, cu
              o viziune comună și abilități variate. Numărul acestora constituie
              78 de persoane.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={"/images/capacitatea.webp"}
              width={78}
              height={51}
              alt="capacity"
            />

            <h5 className={styles.cardTitle}>Capacitatea fabricii</h5>

            <p className={styles.cardData}>
              Fracția 0-5 mm – 300 mii t/an;
              <br />
              Fracția 5-10 mm – 100 mii t/an;
              <br />
              Fracția 10-20 mm – 150 mii t/an;
              <br />
              Fracția 20-40 mm – 200 mii t/an;
              <br />
              Fracția 20-70 mm. – 400 mii t/an.
            </p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={"/images/investitii.webp"}
              width={70}
              height={70}
              alt={"investments"}
            />

            <h5 className={styles.cardTitle}>Investiții în active</h5>

            <p className={styles.cardData}>
              În perioada 2009 – 2020, acționarii carierei au efectuat
              investiții semnificative în activele fixe ale întreprinderii, în
              vederea modernizării și creșterii volumului producției finite.
            </p>
          </div>
        </div>
      </div>

      <Image
        className={styles.sectionImage}
        src="/images/about_bg.webp"
        width={1920}
        height={1000}
        alt="about"
      />
    </section>
  );
};
