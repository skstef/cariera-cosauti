import React from "react";
import styles from "./ResourcesAvailability.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export const ResourcesAvailability = () => {
  const { t } = useTranslation("index");

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          src="/images/resourcesAvailability.webp"
          alt="Despre noi"
          width={847}
          height={470}
          className="visibleOn1100AndMore"
        />
        <Image
          src="/images/resourcesAvailabilityTablet.webp"
          alt="Despre noi"
          width={720}
          height={399}
          className="visibleBetween500And1100"
        />
        <Image
          src="/images/resourcesAvailabilityMobile.webp"
          alt="Despre noi"
          width={328}
          height={184}
          className="visibleOn500AndLess"
        />
      </div>

      <div className={styles.right}>
        <div className={styles.resourcesAvailabilityHeader}>
          <h3>{t("resourcesAvailability_title")}</h3>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: t("resourcesAvailability_content"),
          }}
        />
      </div>
    </section>
  );
};
