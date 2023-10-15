import React from "react";
import styles from "./Production.module.scss";
import { firstProducts, secondProducts } from "./products";
import { ProductCard } from "./ProductCard/ProductCard";

export const Production = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>Producția</h3>
      </div>

      <h5 className={styles.sectionSubHeader}>
        Agregate pentru asfalt și beton
      </h5>

      <div className={styles.productsContainer}>
        {firstProducts.map((el) => (
          <ProductCard
            key={el.image}
            name={el.name}
            image={el.image}
            descriptionFirstRow={el.descriptionFirstRow}
            descriptionSecondRow={el.descriptionSecondRow}
          />
        ))}
      </div>

      <h5 className={styles.sectionSubHeader}>
        Materiale pentru design și amenajare
      </h5>

      <div className={styles.productsContainer}>
        {secondProducts.map((el) => (
          <ProductCard
            key={el.image}
            name={el.name}
            image={el.image}
            descriptionFirstRow={el.descriptionFirstRow}
            descriptionSecondRow={el.descriptionSecondRow}
          />
        ))}
      </div>
    </section>
  );
};
