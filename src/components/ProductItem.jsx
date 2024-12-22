import React, { memo } from "react";
import styles from "../styles/ProductItem.module.css";

const ProductItem = memo(({ product }) => {
  return (
    <div className={styles.productItem}>
      <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productCategory}>{product.category}</p>
      <p className={styles.productColor}>Color: {product.color}</p>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>${product.price}</p>
      <p className={styles.productRating}>Rating: {product.rating.toFixed(1)}</p>
    </div>
  );
});

export default ProductItem;
