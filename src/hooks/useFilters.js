import { useState, useMemo, useCallback } from "react";

const fixedColors = ["Red", "Blue", "Green", "Yellow", "Black"];

export const useFilters = (initialProducts) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleColor = useCallback((color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  }, []);

  const filters = useMemo(() => {
    const searchFilter = (product) =>
      [product.name, product.description].some((field) =>
        field.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const colorFilter = (product) =>
      selectedColors.length === 0 || selectedColors.includes(product.color);

    const priceFilter = (product) =>
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice));

    return [searchFilter, colorFilter, priceFilter];
  }, [searchQuery, selectedColors, minPrice, maxPrice]);

  const filteredProducts = useMemo(
    () =>
      initialProducts.filter((product) =>
        filters.every((filterFn) => filterFn(product))
      ),
    [initialProducts, filters]
  );

  return {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedColors,
    toggleColor,
    availableColors: fixedColors,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
  };
};
