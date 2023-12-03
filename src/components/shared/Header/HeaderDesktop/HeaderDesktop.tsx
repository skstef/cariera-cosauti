import React from "react";
import styles from "./HeaderDesktop.module.scss";
import Image from "next/image";
import Link from "next/link";
import { LanguangeChange } from "../../LanguangeChange/LanguangeChange";
import { useTranslation } from "next-i18next";

export const HeaderDesktop = () => {
  const { t } = useTranslation("common");

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image alt="logo" src="/images/logo.webp" width={75} height={75} />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.topMenu}>
          <li className={styles.menuItem}>
            <Link href="/#about_us">{t("header_aboutUs")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/#production">{t("header_production")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/#galery">{t("header_gallery")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/#parteners">{t("header_parteners")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/#policies">{t("header_politics")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/#human_resources">{t("header_hr")}</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/#contact_us">{t("header_contacts")}</Link>
          </li>
        </ul>
      </nav>
      <LanguangeChange />
    </header>
  );
};
