import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { LanguangeChange } from "../LanguangeChange/LanguangeChange";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image alt="logo" src="/images/logo.webp" width={75} height={75} />
      </Link>
      <ul className={styles.topMenu}>
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
      <LanguangeChange />
    </header>
  );
};
