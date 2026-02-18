import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   console.log('Adding products to Firestore');
  //   addCollectionAndDocuments('products', SHOP_DATA);
  // }, []);

  useEffect(() => {   
    const getCategoriesMap = async () => {
      const categoriesMapArray = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMapArray);
    }
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}