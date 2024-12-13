import { Fragment } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/productList";
import CartListPage from "./pages/cartList";
import ProductDetailsPage from "./pages/productDetails";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Fragment>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="product-details/:id" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartListPage />} />
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
