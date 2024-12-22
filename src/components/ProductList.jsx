import React from "react";
import ProductItem from "./ProductItem";
import styles from "../styles/ProductList.module.css";

const ProductList = React.memo(({ products, hasActiveFilters }) => {
  return (
    <div className={styles.productList}>
      {products.length > 0 && hasActiveFilters ? (
        <>
          <p className={styles.productCount}>Found {products.length} products</p>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p className={styles.noResults}>No products found</p>
      )}
    </div>
  );
});

export default ProductList;
