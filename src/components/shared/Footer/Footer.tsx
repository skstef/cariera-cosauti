import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import cx from "classnames";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.firstBox}>
        <>
          <Image
            className={cx(styles.logo, styles.desktopImage)}
            alt="logo"
            src="/images/logo.webp"
            width={75}
            height={75}
          />
          <Image
            className={cx(styles.logo, styles.mobileImage)}
            alt="logo"
            src="/images/logoBig.webp"
            width={120}
            height={120}
          />
        </>

        <div className={styles.copyRight}>
          {`All rights reserved © ${new Date().getFullYear()}. Cariera Cosăuți`}
        </div>
      </div>

      <nav className={styles.nav}>
        <Link href="/about-us" className={styles.navLink}>
          {t("footer_aboutUs")}
        </Link>
        <Link href="/termeni-si-conditii" className={styles.navLink}>
          {t("footer_termsAndConditions")}
        </Link>
        <Link href="/#contact_us" className={styles.navLink}>
          {t("footer_contacts")}
        </Link>
      </nav>

      <div className={styles.socials}>
        <p className={styles.followUs}> {t("footer_subscribeUs")}</p>

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
