import React from "react";
import styles from "./LanguangeChange.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const LanguangeChange = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLocale = (locale: string) => {
    router.push(
      {
        //@ts-ignore
        route: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale }
    );
  };

  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.currentLanguange}
        width={20}
        height={15}
        src={`/images/${i18n.language.toUpperCase()}.webp`}
        alt="i18n.language"
      />

      <button className={styles.expandBtn}>
        <Image
          className={styles.arrow}
          width={20}
          height={20}
          src="/images/arrowDown.webp"
          alt="expand"
        />
      </button>

      <div className={styles.languages}>
        <button className={styles.langBtn} onClick={() => changeLocale("ru")}>
          <Image width={20} height={15} src="/images/RU.webp" alt="Ru" />
          <span className={styles.langName}>RU</span>
        </button>
        <button className={styles.langBtn} onClick={() => changeLocale("en")}>
          <Image width={20} height={15} src="/images/EN.webp" alt="En" />
          <span className={styles.langName}>EN</span>
        </button>
        <button className={styles.langBtn} onClick={() => changeLocale("ro")}>
          <Image width={20} height={16} src="/images/RO.webp" alt="Ro" />
          <span className={styles.langName}>RO</span>
        </button>
      </div>
    </div>
  );
};
