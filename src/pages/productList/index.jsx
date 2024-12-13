import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const ProductListPage = () => {
  const { getContextValue } = useContext(ShoppingCartContext);
  console.log(getContextValue);
  return <div>product list page</div>;
};

export default ProductListPage;
