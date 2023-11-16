import React from "react";
import styles from "./Mission.module.scss";
import { useTranslation } from "next-i18next";

export const Mission = () => {
  const { t } = useTranslation("about-us");

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{t("mission_title")}</h3>
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: t("mission_content") }}
      />
    </section>
  );
};
