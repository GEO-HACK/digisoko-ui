import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { CartProvider } from "../context/cartContext";
import { useState } from "react";

import { Outlet } from "react-router-dom";
import { query } from "firebase/firestore";

export default function Layout({ children }) {
  const location = useLocation()

  const isHomePage = location.pathname === "/"

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchQuery = () =>
  {
    setSearchQuery(query.toLowerCase());
  }
  return (
    <div className={`w-full ${isHomePage ? "pt-0" : "pt-16"}`}>
      <CartProvider>
        <Navbar searchQuery={searchQuery} onSearchChange={handleSearchQuery} />
      </CartProvider>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
