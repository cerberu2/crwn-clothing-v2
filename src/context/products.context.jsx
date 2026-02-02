import { createContext, useState, useEffect } from "react";

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  useEffect(() => {
    // Here you can fetch product data from an API or load from a local file
    // For example:
    // fetch('/path-to-your-api/products')
    //   .then(response => response.json())
    //   .then(data => setProducts(data));
    setProducts(PRODUCTS);
  }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}