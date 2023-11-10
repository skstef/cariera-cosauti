import React from "react";
import styles from "./Certificates.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

export const Certificates = () => {
  const isDesktop = useMediaQuery("(min-width:1100px)");

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>Certificate și standarde</h3>
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
