import React, { useState } from "react";
import styles from "./HeaderMobile.module.scss";
import Link from "next/link";
import Image from "next/image";
import { LanguangeChange } from "../../LanguangeChange/LanguangeChange";
import { useTranslation } from "next-i18next";

export const HeaderMobile = () => {
  const { t } = useTranslation("common");
  const [isMenuOpened, setMenuOpened] = useState(false);

  const toggleOpenMenu = () => {
    setMenuOpened((oldState) => !oldState);
  };

  const onMenuElementClick = () => {
    setMenuOpened(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            alt="logo"
            src="/images/logoSmall.webp"
            width={37}
            height={50}
          />
        </Link>

        <LanguangeChange />
        <button onClick={toggleOpenMenu} className={styles.menuBtn}>
          <div
            className={
              isMenuOpened
                ? `${styles.menuBurger} ${styles.menuBurgerClose}`
                : styles.menuBurger
            }
          />
        </button>
      </header>

      <div
        className={
          isMenuOpened ? `${styles.menu} ${styles.menuOpened}` : styles.menu
        }
      >
        <nav className={styles.nav}>
          <ul className={styles.elementsList}>
            <li className={styles.menuItem}>
              <Link onClick={onMenuElementClick} href="/#about_us">
                {t("header_aboutUs")}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link onClick={onMenuElementClick} href="/#production">
                {t("header_production")}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link onClick={onMenuElementClick} href="/#galery">
                {t("header_gallery")}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link onClick={onMenuElementClick} href="/#parteners">
                {t("header_parteners")}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link onClick={onMenuElementClick} href="/#policies">
                {t("header_politics")}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link onClick={onMenuElementClick} href="/#contact_us">
                {t("header_contacts")}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link onClick={onMenuElementClick} href="/#human_resources">
                {t("header_hr")}
              </Link>
            </li>
          </ul>
          Z
        </nav>
      </div>
    </>
  );
};
