import React from "react";
import styles from "./Certificates.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

export const Certificates = () => {
  const { t } = useTranslation("index");
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const isMobile = useMediaQuery("(max-width:500px)");

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

      {isDesktop ? (
        <Image
          src="/images/certificates.webp"
          className={styles.sectionImage}
          width={1920}
          height={816}
          alt="certificates"
        />
      ) : isMobile ? (
        <Image
          src="/images/certificatesMobile.webp"
          className={styles.sectionImage}
          width={768}
          height={853}
          alt="certificates"
        />
      ) : (
        <Image
          src="/images/certificatesTablet.webp"
          className={styles.sectionImage}
          width={768}
          height={853}
          alt="certificates"
        />
      )}
    </section>
  );
};
