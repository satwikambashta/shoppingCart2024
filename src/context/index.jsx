import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();
      // console.log(result);
      if (result && result?.products) {
        setListOfProducts(result?.products);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleAddToCart(getProductDetails) {
    console.log(getProductDetails);
    let copyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = copyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );
    if (findIndexOfCurrentItem !== -1) {
      copyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails?.price,
      });
    } else {
    }
    setCartItems(copyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(copyExistingCartItems));
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        loading,
        setLoading,
        listOfProducts,
        productDetails,
        setProductDetails,
        handleAddToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
