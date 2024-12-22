import React from "react";
import { products } from "./data/products";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import SortOptions from "./components/SortOptions";
import { useFilters } from "./hooks/useFilters";
import { useSort } from "./hooks/useSort";
import "./App.css";

const App = () => {
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    availableColors,
    selectedColors,
    toggleColor,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
  } = useFilters(products);

  const { sortedProducts, sortOption, setSortOption } = useSort(filteredProducts);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedColors.length > 0 ||
    (minPrice > 0 || maxPrice < 9999);

  return (
    <div className="appContainer">
      <div className="filtersContainer">
        <Filters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          availableColors={availableColors}
          selectedColors={selectedColors}
          toggleColor={toggleColor}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>
      <div className="productListContainer">
        <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
        <ProductList products={sortedProducts} hasActiveFilters={hasActiveFilters} />
      </div>
    </div>
  );
};

export default App;
