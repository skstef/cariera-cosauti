import React from "react";
import styles from "./ResourcesAvailability.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";

export const ResourcesAvailability = () => {
  const { t } = useTranslation("index");
  const isDesktop = useMediaQuery("(min-width:1100px)");

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        {isDesktop ? (
          <Image
            src="/images/resourcesAvailability.webp"
            alt="Despre noi"
            width={997}
            height={553}
          />
        ) : (
          <Image
            src="/images/resourcesAvailabilityTablet.webp"
            alt="Despre noi"
            width={720}
            height={399}
          />
        )}
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
