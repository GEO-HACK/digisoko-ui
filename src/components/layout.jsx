import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { CartProvider } from "../context/cartContext";

import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <cartProvider>
        <Navbar />
      </cartProvider>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
