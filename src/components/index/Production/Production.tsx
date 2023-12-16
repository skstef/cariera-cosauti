import React from "react";
import styles from "./Production.module.scss";
import { firstProducts, secondProducts } from "./products";
import { ProductCard } from "./ProductCard/ProductCard";
import { useTranslation } from "next-i18next";

export const Production = () => {
  const { t } = useTranslation("index");

  return (
    <section id="production" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3>{t("production_title")}</h3>
      </div>

      <h4 className={styles.sectionSubHeader}>
        {t("production_firstSubTitle")}
      </h4>

      <div className={styles.productsContainer}>
        {firstProducts.map((el) => (
          <ProductCard
            key={el.image}
            name={t(el.name)}
            image={el.image}
            description={t(el.description)}
          />
        ))}
      </div>

      <h4 className={styles.sectionSubHeader}>
        {t("production_secondSubTitle")}
      </h4>

      <div className={styles.productsContainer}>
        {secondProducts.map((el) => (
          <ProductCard
            key={el.image}
            name={t(el.name)}
            image={el.image}
            description={t(el.description)}
          />
        ))}
      </div>
    </section>
  );
};
