import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar({searchQuery, onSearchChange }) {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const { logout } = useAuth();
  const { cart } = useCart();

  const isHomePage = location.pathname === "/";

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log("logged out of the site");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setDropdownOpen(false);
    }
  };

  // Handle scroll detection to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide navbar on downward scroll and after passing 100px
        setIsVisible(false);
      } else {
        // Show navbar on upward scroll
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between h-16 py-5 px-4 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isHomePage ? "bg-transparent text-white" : "bg-white shadow-lg text-gray-700"}`}
    >
      <Link
        className={`${
          isHomePage ? "text-white" : "text-violet-700"
        } text-2xl font-extrabold uppercase italic`}
        to="/"
      >
        DigiSoko
      </Link>

      <nav className="flex-grow flex justify-center">
        <NavLink
          to="/"
          className={`font-semibold px-4 hover:underline ${
            isHomePage ? "text-white hover:text-lime-400" : "text-violet-700 hover:text-black"
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={`font-semibold px-4 hover:underline ${
            isHomePage ? "text-white hover:text-lime-400" : "text-violet-700 hover:text-black"
          }`}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={`font-semibold px-4 hover:underline ${
            isHomePage ? "text-white hover:text-lime-400" : "text-violet-700 hover:text-black"
          }`}
        >
          About
        </NavLink>
        <NavLink to="/products/cart" className="relative px-3">
          <BsCart4 className={`text-2xl ${isHomePage ? "text-white" : "text-gray-700"}`} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </NavLink>
        <input
          type="text"
          placeholder="search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`border rounded text-sm p-1 ml-20 ${
            isHomePage
              ? "border-transparent text-white bg-gray-700 placeholder-white focus:border-lime-300"
              : "border-gray-700 text-gray-700 bg-lime-300 focus:border-lime-300"
          }`}
        />
      </nav>
      <div className="relative">
        <button
          onClick={handleToggleDropdown}
          className={`text-2xl hover:text-lime-400 ${
            isHomePage ? "text-white" : "text-gray-700 hover:text-black"
          }`}
        >
          <FaUserCircle className="text-3xl" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-lime-300"
              onClick={() => setDropdownOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-lime-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
