import React from "react";
import Home from "./pages/Home";
import Products from "./pages/products/viewProducts";
import AddProducts from "./pages/products/AddProducts";
import ProductLayout from "./components/productLayout";
import ProductDescription from "./pages/products/productDescription";
import Cart from "./pages/products/cart";
import About from "./pages/About";
import LoginRegister from "./components/Authentication/LoginRegistration";
import Layout from "./components/layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginRegister />} />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <ProductLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Products />} />
        <Route path="AddProduct" element={<AddProducts />} />
        <Route path="details/:id" element={<ProductDescription />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AnimatePresence>
          <RouterProvider router={router} location={location} key={location.pathname}  />
        </AnimatePresence>
      </CartProvider>
    </AuthProvider>
  );
}
