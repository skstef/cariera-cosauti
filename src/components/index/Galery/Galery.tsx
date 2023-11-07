import React, { useRef } from "react";
import styles from "./Galery.module.scss";
import Image from "next/image";

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

const items = images.map((el) => (
  <div className={styles.imageWrapper} key={el}>
    <Image
      width={638}
      height={803}
      className={styles.image}
      src={el}
      draggable="false"
      alt="Galerie"
    />

    <p>Gard gabiion</p>
  </div>
));

export const Galery = () => {
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

  return (
    <section id="galery" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>Galerie foto</h3>
        <p>Soliditate, Eleganță, Perseverență</p>
      </div>

      <div className={styles.imagesCarouselWrapper}>
        <button onClick={handleScrollLeft} className={styles.leftArrowBtn}>
          <Image
            width={104}
            height={130}
            src="/images/leftArrow.webp"
            alt="left arrow"
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
            alt="right arrow"
            draggable="false"
          />
        </button>
      </div>
    </section>
  );
};
