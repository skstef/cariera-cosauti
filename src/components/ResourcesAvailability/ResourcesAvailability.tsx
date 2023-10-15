import React from "react";
import styles from "./ResourcesAvailability.module.scss";
import Image from "next/image";

export const ResourcesAvailability = () => {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.resourcesAvailabilityHeader}>
          <h3>
            Disponibilitatea <br />
            <span>resurselor</span>
          </h3>
        </div>
        <p>
          SA „Cariera de Granit si Pietris din Soroca” e unica carieră de granit
          din țara noastră. <br /> <br /> În ceea ce privește disponibilitatea
          resurselor, zăcămintele de granit cuprind cca 22 milioane m³ de rocă,
          ceea ce corespunde unui total de aproximativ 56 milioane de tone,
          având un rol extrem de important în asigurarea RM cu resurse minerale
          autohtone, de calitate înaltă. Astfel, împreună cu partenerii noștri,
          <br />
          <span>Construim Viitorul pe Baza Calității!</span>
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/resourcesAvailability.webp"
          alt="Despre noi"
          width={1102}
          height={612}
        />
      </div>
    </section>
  );
};
