import React from "react";
import styles from "./Certificates.module.scss";
import Image from "next/image";
import cx from "classnames";
import { useTranslation } from "next-i18next";

export const Certificates = () => {
  const { t } = useTranslation("index");

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{t("certificates_title")}</h3>
      </div>

      <div className={styles.certificatesContainer}>
        <div className={styles.firstRow}>
          <div className={styles.certificateContainer} />
          <div className={styles.certificateContainer} />
        </div>
        <div className={styles.secondRow}>
          <div className={styles.certificateContainer} />
          <div className={styles.certificateContainer} />
        </div>
      </div>

      <>
        <Image
          src="/images/certificates.webp"
          className={cx(styles.sectionImage, "visibleOn1100AndMore")}
          width={1920}
          height={816}
          alt="certificates"
        />

        <Image
          src="/images/certificatesTablet.webp"
          className={cx(styles.sectionImage, "visibleBetween500And1100")}
          width={768}
          height={853}
          alt="certificates"
        />

        <Image
          src="/images/certificatesMobile.webp"
          className={cx(styles.sectionImage, "visibleOn500AndLess")}
          width={768}
          height={853}
          alt="certificates"
        />
      </>
    </section>
  );
};
