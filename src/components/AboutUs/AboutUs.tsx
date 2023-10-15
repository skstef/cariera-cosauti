import React from "react";
import styles from "./AboutUs.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section id="aboutUs" className={styles.section}>
      <div className={styles.left}>
        <div className={styles.aboutUsHeader}>
          <h3>
            Despre <br />
            <span>companie</span>
          </h3>
        </div>
        <p>
          SA „Cariera de Granit și Pietriș din Soroca” este situată pe versantul
          drept al terasei inundate a râului Nistru, la o distanță de 0,5 km est
          de satul Cosăuți, raionul Soroca, RM. <br />
          <br /> Până în 1970, cariera extrăgea piatră de carieră, care era
          recoltată și încărcată manual în mijloacele de transport. În carieră a
          fost instalat un concasor pentru producerea pietrișului calcaros.
        </p>

        <Button variant="contained" className={styles.btn}>
          Află mai multe
        </Button>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/about.webp"
          alt="Despre noi"
          width={1093}
          height={590}
        />
      </div>
    </section>
  );
};
