import React from "react";
import styles from "./Certificates.module.scss";
import Image from "next/image";

export const Certificates = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>
          Certificate și
          <br /> <span>standarde</span>
        </h3>
      </div>

      <div className={styles.certificatesContainer}>
        <div className={styles.certificateContainer} />
        <div className={styles.certificateContainer} />
        <div className={styles.certificateContainer} />
        <div className={styles.certificateContainer} />
      </div>

      <Image
        src="/images/certificates.webp"
        className={styles.sectionImage}
        width={1920}
        height={830}
        alt="certificates"
      />
    </section>
  );
};
