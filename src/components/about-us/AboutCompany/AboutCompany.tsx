import React from "react";
import styles from "./AboutCompany.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import cx from "classnames";

export const AboutCompany = () => {
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
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={"/images/calitatea.webp"}
                width={63}
                height={78}
                alt="quality"
              />

              <h5
                className={styles.cardTitle}
                dangerouslySetInnerHTML={{ __html: t("aboutUs_cardTitle_1") }}
              />

              <p className={styles.cardData}>{t("aboutUs_cardContent_1")}</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={"/images/personalul.webp"}
                width={73}
                height={67}
                alt="staff"
              />

              <h5
                className={styles.cardTitle}
                dangerouslySetInnerHTML={{ __html: t("aboutUs_cardTitle_2") }}
              />

              <p className={styles.cardData}>{t("aboutUs_cardContent_2")}</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={"/images/capacitatea.webp"}
                width={78}
                height={51}
                alt="capacity"
              />

              <h5
                className={styles.cardTitle}
                dangerouslySetInnerHTML={{ __html: t("aboutUs_cardTitle_3") }}
              />

              <p
                className={styles.cardData}
                dangerouslySetInnerHTML={{ __html: t("aboutUs_cardContent_3") }}
              />
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <Image
                className={styles.cardImage}
                src={"/images/investitii.webp"}
                width={70}
                height={70}
                alt={"investments"}
              />

              <h5
                className={styles.cardTitle}
                dangerouslySetInnerHTML={{ __html: t("aboutUs_cardTitle_4") }}
              />

              <p className={styles.cardData}>{t("aboutUs_cardContent_4")}</p>
            </div>
          </div>
        </div>
      </div>

      <>
        <Image
          className={cx(styles.sectionImage, styles.desktopImage)}
          src="/images/about_bg.webp"
          width={1920}
          height={1000}
          alt="about"
        />

        <Image
          className={cx(styles.sectionImage, styles.tabletImage)}
          src="/images/about_bg_tablet.webp"
          width={768}
          height={985}
          alt="about"
        />

        <Image
          className={cx(styles.sectionImage, styles.mobileImage)}
          src="/images/about_bg_mobile.webp"
          width={360}
          height={1496}
          alt="about"
        />
      </>
    </section>
  );
};
