import React from "react";
import styles from "./AboutCompany.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

export const AboutCompany = () => {
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const isMobile = useMediaQuery("(min-width:730px)");

  const { t } = useTranslation("about-us");

  return (
    <section className={styles.section}>
      <div className={styles.sectionWrapper}>
        <div className={styles.left}>
          <div className={styles.sectionHeader}>
            <h3>{t("aboutUs_title")}</h3>
          </div>
          <p
            className={styles.aboutDescription}
            dangerouslySetInnerHTML={{ __html: t("aboutUs_content") }}
          />
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

            <h5 className={styles.cardTitle}>{t("aboutUs_cardTitle_1")}</h5>

            <p className={styles.cardData}>{t("aboutUs_cardContent_1")}</p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={"/images/personalul.webp"}
              width={73}
              height={67}
              alt="staff"
            />

            <h5 className={styles.cardTitle}>{t("aboutUs_cardTitle_2")}</h5>

            <p className={styles.cardData}>{t("aboutUs_cardContent_2")}</p>
          </div>

          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={"/images/capacitatea.webp"}
              width={78}
              height={51}
              alt="capacity"
            />

            <h5 className={styles.cardTitle}>{t("aboutUs_cardTitle_3")}</h5>

            <p
              className={styles.cardData}
              dangerouslySetInnerHTML={{ __html: t("aboutUs_cardContent_3") }}
            />
          </div>

          <div className={styles.card}>
            <Image
              className={styles.cardImage}
              src={"/images/investitii.webp"}
              width={70}
              height={70}
              alt={"investments"}
            />

            <h5 className={styles.cardTitle}>{t("aboutUs_cardTitle_4")}</h5>

            <p className={styles.cardData}>{t("aboutUs_cardContent_4")}</p>
          </div>
        </div>
      </div>

      {isDesktop ? (
        <Image
          className={styles.sectionImage}
          src="/images/about_bg.webp"
          width={1920}
          height={1000}
          alt="about"
        />
      ) : isMobile ? (
        <Image
          className={styles.sectionImage}
          src="/images/about_bg_mobile.webp"
          width={768}
          height={985}
          alt="about"
        />
      ) : (
        <Image
          className={styles.sectionImage}
          src="/images/about_bg_tablet.webp"
          width={768}
          height={985}
          alt="about"
        />
      )}
    </section>
  );
};
