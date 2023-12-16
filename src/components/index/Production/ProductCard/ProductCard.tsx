import React from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";

interface IProductCardProps {
  image: string;
  name: string;
  description: string;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  image,
  name,
  description,
}) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          {image.length ? (
            <Image src={image} alt={name} width={387} height={397} />
          ) : (
            <div className={styles.imagePlaceholder} />
          )}
          <p className={styles.productName}>{name}</p>
        </div>
        <div className={styles.flipCardBack}>
          <p
            className={styles.row}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};
