import React from "react";
import styles from "./TermsOfUse.module.scss";
import { TermsRo } from "./languages/TermsRo";
import { useTranslation } from "next-i18next";
import { TermsRu } from "./languages/TermsRu";
import { TermsEn } from "./languages/TermsEn";

export const TermsOfUse = () => {
  const { i18n, t } = useTranslation("terms-and-conditions");

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 dangerouslySetInnerHTML={{ __html: t("termsOfUse_title") }} />
      </div>

      <div className={styles.termsOfUse}>
        {i18n.language === "ro" && <TermsRo />}
        {i18n.language === "ru" && <TermsRu />}
        {i18n.language === "en" && <TermsEn />}
      </div>
    </section>
  );
};
