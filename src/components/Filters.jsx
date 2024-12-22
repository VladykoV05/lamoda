import React, { memo } from "react";
import styles from "../styles/Filters.module.css";

const Filters = memo(
  ({
    searchQuery,
    setSearchQuery,
    availableColors,
    selectedColors,
    toggleColor,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
  }) => {
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleMinPriceChange = (event) => {
      const value = event.target.value;
      setMinPrice(value === "" ? "" : Math.min(parseFloat(value), maxPrice || Infinity));
    };

    const handleMaxPriceChange = (event) => {
      const value = event.target.value;
      setMaxPrice(value === "" ? "" : Math.max(parseFloat(value), minPrice || 0));
    };

    return (
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />

        <div className={styles.colorFilter}>
          <h4>Filter by Color:</h4>
          {availableColors.map((color) => (
            <label key={color} className={styles.colorOption}>
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => toggleColor(color)}
              />
              {color}
            </label>
          ))}
        </div>

        <div className={styles.priceFilter}>
          <h4>Filter by Price:</h4>
          <div className={styles.priceRange}>
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={handleMinPriceChange}
              className={styles.priceInput}
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className={styles.priceInput}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Filters;
