import React, { useRef } from "react";
import styles from "./Galery.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";

const images = [
  "/images/gallery-1.webp",
  "/images/gallery-2.webp",
  "/images/gallery-3.webp",
  "/images/gallery-4.webp",
  "/images/gallery-5.webp",
  "/images/gallery-6.webp",
  "/images/gallery-7.webp",
  "/images/gallery-8.webp",
  "/images/gallery-9.webp",
  "/images/gallery-10.webp",
  "/images/gallery-11.webp",
  "/images/gallery-12.webp",
  "/images/gallery-13.webp",
  "/images/gallery-14.webp",
];

const imagesMobile = [
  "/images/gallery-1-mobile.webp",
  "/images/gallery-2-mobile.webp",
  "/images/gallery-3-mobile.webp",
  "/images/gallery-4-mobile.webp",
  "/images/gallery-5-mobile.webp",
  "/images/gallery-6-mobile.webp",
  "/images/gallery-7-mobile.webp",
  "/images/gallery-8-mobile.webp",
  "/images/gallery-9-mobile.webp",
  "/images/gallery-10-mobile.webp",
  "/images/gallery-11-mobile.webp",
  "/images/gallery-12-mobile.webp",
  "/images/gallery-13-mobile.webp",
  "/images/gallery-14-mobile.webp",
];

export const Galery = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const { t } = useTranslation("index");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const items = (isMobile ? imagesMobile : images).map((el, index) => (
    <div className={styles.imageWrapper} key={el}>
      <Image
        width={638}
        height={803}
        className={styles.image}
        src={el}
        draggable="false"
        alt="Galerie"
      />

      <p>{t(`gallery_image_${index + 1}`)}</p>
    </div>
  ));

  return (
    <section id="galery" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{t("gallery_title")}</h3>
        <p>{t("gallery_subTitle")}</p>
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
    </section>
  );
};
