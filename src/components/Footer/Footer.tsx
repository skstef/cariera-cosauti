import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.firstBox}>
        <Image alt="logo" src="/images/logo.webp" width={75} height={75} />
        <div className={styles.copyRight}>
          All rights reserved © 2023. Cariera Cosăuți
        </div>
      </div>

      <nav className={styles.nav}>
        <a className={styles.navLink}>Despre noi</a>
        <a className={styles.navLink}>Termeni și condiții</a>
        <a className={styles.navLink}>Contactează-ne</a>
      </nav>

      <div className={styles.socials}>
        <p className={styles.followUs}>Urmărește-ne</p>

        {/* <a target="_blank" className={styles.socialsIcon}>
          <Image
            src="/images/instagram.svg"
            alt="Instagram"
            width={32}
            height={32}
          />
        </a> */}
        <a
          href="https://www.facebook.com/CGPSoroca"
          target="_blank"
          className={styles.socialsIcon}
        >
          <Image
            src="/images/facebook.svg"
            alt="Facebook"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://youtu.be/PX0a9yDDCss"
          target="_blank"
          className={styles.socialsIcon}
        >
          <Image
            src="/images/youtube.svg"
            alt="Youtube"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/cariera-de-granit-si-pietris-din-soroca-s-a/"
          target="_blank"
          className={styles.socialsIcon}
        >
          <Image
            src="/images/linkedin.svg"
            alt="Linkedin"
            width={32}
            height={32}
          />
        </a>
      </div>
    </footer>
  );
};
