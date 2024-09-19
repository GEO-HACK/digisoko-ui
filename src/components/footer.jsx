import React from 'react';
import image from '../assets/images/logo-color.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <img className="h-12" src={image} alt="Logo" />
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <Link to="/" className="hover:text-blue-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-400 transition duration-300">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Product Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <p className="text-gray-400">Explore our wide range of products and offers.</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
}
