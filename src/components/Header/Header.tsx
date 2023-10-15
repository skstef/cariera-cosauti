import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image alt="logo" src="/images/logo.webp" width={75} height={75} />
      <ul className={styles.topMenu}>
        <li className={styles.menuItem}>
          <a href="#aboutUs">Despre Noi</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#production">Producția</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#galery">Galeria</a>
        </li>
        <li className={styles.menuItem}>
          <a>Cadre</a>
        </li>
        <li className={styles.menuItem}>
          <a>Parteneri</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#policies">Politici</a>
        </li>
        <li className={styles.menuItem}>
          <a>Contacte</a>
        </li>
        <li className={styles.menuItem}>
          <a>Cadre</a>
        </li>
      </ul>
    </header>
  );
};
