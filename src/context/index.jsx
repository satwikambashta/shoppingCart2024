import { createContext, useContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [listOfProducts, setListOfProducts] = useState([]);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();
      console.log(result);
      if (result && result?.products) setListOfProducts(result?.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ loading, listOfProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
