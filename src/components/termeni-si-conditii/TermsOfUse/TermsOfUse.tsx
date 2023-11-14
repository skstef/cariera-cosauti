import React from "react";
import styles from "./TermsOfUse.module.scss";
import { TermsRo } from "./languages/TermsRo";

export const TermsOfUse = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>
          Termeni
          <br /> <span>și condiții</span>
        </h3>
      </div>

      <div className={styles.termsOfUse}>
        <TermsRo />
      </div>
    </section>
  );
};
