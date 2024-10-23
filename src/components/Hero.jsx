import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/juice.png";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products"); // Redirecting to the products page
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-white/10 to-white"></div>
      <div className="absolute bottom-0 w-full h-6 bg-gradient-to-t from-gray-300 to-transparent"></div>

      <div className="relative z-10 flex items-center w-full h-full lg:px-24">
        <div className="w-1/3 flex flex-col gap-6 px-5">
          <h1 className="text-2xl lg:text-3xl font-semibold text-white">
            Fresh <span className="text-lime-400">Vegetables</span> &{" "}
            <span className="text-lime-400">Spices</span> for Culinary Delight
          </h1>
         
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Explore our selection of farm-fresh vegetables and aromatic spices. Perfect for home cooks and chefs alike, chosen for quality and taste.
          </p>
          <button
            onClick={handleShopNow}
            className="px-4 py-2 w-40 rounded-lg border-2 border-lime-400 bg-lime-100 text-lime-600 font-bold hover:bg-lime-400 hover:text-black transition duration-300"
          >
            Shop Now
          </button>
        </div>

        
        <div className="w-1/3 flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="rounded-lg w-3/4 shadow-sm"
            src={image}
            alt="Fresh Vegetables and Spices"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-1/3 flex flex-col gap-6 px-5">
          <h1 className="text-2xl lg:text-2xl font-semibold text-lime-400">
            Elevate Your Dishes
          </h1>
          <h3 className="text-xl lg:text-xl text-gray-900">
            Spices that inspire creativity.
          </h3>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            We provide everything you need to transform ordinary meals into
            extraordinary culinary experiences. Discover the difference with
            every bite.
          </p>
        </div>
      </div>
    </section>
  );
}
