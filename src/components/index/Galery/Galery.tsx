import React, { useEffect, useState } from "react";
import styles from "./Galery.module.scss";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
  <Image
    width={385}
    height={385}
    className={styles.image}
    key={el}
    src={el}
    alt="Galerie"
  />
));

export const Galery = () => {
  const [innerWidth, setInnerWidth] = useState(1024);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <section id="galery" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>Galerie foto</h3>
        <p>Soliditate, Eleganță, Perseverență</p>
      </div>
      <div className={styles.imagesCarousel}>
        <AliceCarousel
          mouseTracking
          items={items}
          innerWidth={innerWidth}
          infinite
          disableButtonsControls
          disableDotsControls
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 2,
            },
            1440: {
              items: 3,
            },
            1700: {
              items: 4,
            },
          }}
        />
      </div>
    </section>
  );
};
