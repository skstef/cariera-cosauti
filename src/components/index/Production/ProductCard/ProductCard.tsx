import React from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";

interface IProductCardProps {
  image: string;
  name: string;
  descriptionFirstRow: string;
  descriptionSecondRow: string;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  image,
  name,
  descriptionFirstRow,
  descriptionSecondRow,
}) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Image src={image} alt={name} width={387} height={397} />
          <p className={styles.productName}>{name}</p>
        </div>
        <div className={styles.flipCardBack}>
          <p className={styles.firstRow}>{descriptionFirstRow}</p>
          <p className={styles.secondRow}>{descriptionSecondRow}</p>
        </div>
      </div>
    </div>
  );
};
