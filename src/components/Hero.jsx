import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import videoBg from "../assets/video.mp4";

export default function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products"); // Redirecting to the products page
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Hero Section with Video Background */}
      <div className="w-full h-screen relative flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fresh Produce Delivered to Your Doorstep
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto">
            Discover the finest fruits, vegetables, and spices. Handpicked for
            quality, packed with care, and delivered fresh to you.
          </p>
          <button
            onClick={handleShopNow}
            className="px-6 py-3 mt-6 text-lg font-semibold rounded-full border-2 border-lime-500 bg-gradient-to-r from-lime-400 to-green-500 text-black hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="w-full bg-gray-100 py-6 flex items-center justify-evenly text-center">
        <div>
          <h2 className="text-2xl font-bold text-lime-600">500+</h2>
          <p className="text-sm text-gray-700">Products Available</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-lime-600">1000+</h2>
          <p className="text-sm text-gray-700">Happy Customers</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-lime-600">24/7</h2>
          <p className="text-sm text-gray-700">Customer Support</p>
        </div>
      </div>
    </div>
  );
}
