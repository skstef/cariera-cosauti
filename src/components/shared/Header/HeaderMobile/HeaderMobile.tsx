import React, { useState } from "react";
import styles from "./HeaderMobile.module.scss";
import Link from "next/link";
import Image from "next/image";
import { LanguangeChange } from "../../LanguangeChange/LanguangeChange";

export const HeaderMobile = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const toggleOpenMenu = () => {
    setMenuOpened((oldState) => !oldState);
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
              <Link href="/#about_us">Despre Noi</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/#production">Producția</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/#galery">Galeria</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/#parteners">Parteneri</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/#policies">Politici</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/#contact_us">Contacte</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/#human_resources">Cadre</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
