import React, { useRef } from "react";
import styles from "./Certificates.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import cx from "classnames";
import { useMediaQuery } from "@mui/material";

const images = [
  "/images/certificate_0.webp",
  "/images/certificate_1.webp",
  "/images/certificate_2.webp",
  "/images/certificate_3.webp",
  "/images/certificate_4.webp",
  "/images/certificate_5.webp",
];

export const Certificates = () => {
  const { t } = useTranslation("index");
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const scrollDistance = isMobile ? 200 : 500;

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -1 * scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const items = images.map((el, index) => (
    <div className={styles.imageWrapper} key={el}>
      <Image
        width={367}
        height={573}
        className={styles.image}
        src={el}
        draggable="false"
        alt="Galerie"
      />
    </div>
  ));

  return (
    <section id="galery" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{t("certificates_title")}</h3>
      </div>

      <div className={styles.imagesCarouselWrapper}>
        <button onClick={handleScrollLeft} className={styles.leftArrowBtn}>
          <Image
            width={104}
            height={130}
            src="/images/leftArrow.webp"
            alt="left"
            draggable="false"
          />
        </button>
        <div ref={containerRef} className={styles.imagesCarousel}>
          {items}
        </div>
        <button onClick={handleScrollRight} className={styles.rightArrowBtn}>
          <Image
            width={104}
            height={130}
            src="/images/rightArrow.webp"
            alt="right"
            draggable="false"
          />
        </button>
      </div>
      <>
        <Image
          src="/images/certificates.webp"
          className={cx(styles.sectionImage)}
          width={1920}
          height={816}
          alt="certificates"
        />
      </>
    </section>
  );
};
