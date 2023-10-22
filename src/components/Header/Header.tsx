import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image alt="logo" src="/images/logo.webp" width={75} height={75} />
      <ul className={styles.topMenu}>
        <li className={styles.menuItem}>
          <a href="#about_us">Despre Noi</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#production">Producția</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#galery">Galeria</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#parteners">Parteneri</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#policies">Politici</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#contact_us">Contacte</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#human_resources">Cadre</a>
        </li>
      </ul>
    </header>
  );
};
