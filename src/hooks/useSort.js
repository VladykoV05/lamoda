import { useState, useMemo } from "react";

export const useSort = (products) => {
  const [sortOption, setSortOption] = useState("ratingDesc");

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "ratingDesc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [products, sortOption]);

  return { sortedProducts, sortOption, setSortOption };
};
