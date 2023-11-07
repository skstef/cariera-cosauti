import React from "react";
import styles from "./LanguangeChange.module.scss";
import Image from "next/image";

export const LanguangeChange = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.currentLanguange}
        width={20}
        height={15}
        src="/images/RO.webp"
        alt="Romanian"
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
        <button className={styles.langBtn}>
          <Image width={20} height={20} src="/images/RO.webp" alt="Romanian" />
        </button>
        <button className={styles.langBtn}>
          <Image width={20} height={20} src="/images/EN.webp" alt="Romanian" />
        </button>
        <button className={styles.langBtn}>
          <Image width={20} height={20} src="/images/RU.webp" alt="Romanian" />
        </button>
      </div>
    </div>
  );
};
