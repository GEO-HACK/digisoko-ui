import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { CartProvider } from "../context/cartContext";

import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <CartProvider>
        <Navbar />
      </CartProvider>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
