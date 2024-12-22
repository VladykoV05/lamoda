import React, { memo } from "react";
import styles from "../styles/SortOptions.module.css";

const SortOptions = memo(({ sortOption, setSortOption }) => {
  return (
    <div className={styles.sortOptions}>
      <button
        className={`${styles.sortButton} ${sortOption === "priceAsc" ? styles.active : ""}`}
        onClick={() => setSortOption("priceAsc")}
      >
        Lowest Price First
      </button>
      <button
        className={`${styles.sortButton} ${sortOption === "priceDesc" ? styles.active : ""}`}
        onClick={() => setSortOption("priceDesc")}
      >
        Highest Price First
      </button>
      <button
        className={`${styles.sortButton} ${sortOption === "ratingDesc" ? styles.active : ""}`}
        onClick={() => setSortOption("ratingDesc")}
      >
        Most Popular First
      </button>
    </div>
  );
});

export default SortOptions;
