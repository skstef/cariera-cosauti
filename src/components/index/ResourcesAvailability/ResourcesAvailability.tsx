import React from "react";
import styles from "./ResourcesAvailability.module.scss";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

export const ResourcesAvailability = () => {
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
          <h3>Disponibilitatea resurselor</h3>
        </div>
        <p>
          SA „Cariera de Granit si Pietris din Soroca” e unica carieră de granit
          din țara noastră. <br /> <br /> În ceea ce privește disponibilitatea
          resurselor, zăcămintele de granit cuprind cca 22 milioane m³ de rocă,
          ceea ce corespunde unui total de aproximativ 56 milioane de tone,
          având un rol extrem de important în asigurarea RM cu resurse minerale
          autohtone, de calitate înaltă. Astfel, împreună cu partenerii noștri,{" "}
          <span>Construim Viitorul pe Baza Calității!</span>
        </p>
      </div>
    </section>
  );
};
