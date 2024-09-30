import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/image1.webp";

export default function Hero() 
{

  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products")//redirecting to the products
  }
  return (
    <section className="w-full py-10 px-5 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 mx-auto">
      <div className="flex flex-col justify-center gap-4 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800">
          Fresh <span className="text-lime-400">Vegetables</span>& <span className="text-lime-400">Spices</span> for culinary Delight
        </h1>
        <h3 className="text-xl lg:text-2xl text-gray-600">Fresh, flavorful, and ready to elevate your cooking</h3>
        <p className="text-gray-700 max-w-md">
          Explore our selection of farm-fresh vegetables and aromatic spices.
          Perfect for home cooks and chefs alike, our products are chosen for
          their quality and taste.
        </p>
        <button
        onClick={handleShopNow}
        
        className="px-5 py-2 w-32 rounded-lg border-2 border-green-400 bg-[#ecfccb] text-lime-500 font-bold text-sm hover:bg-lime-400 hover:text-black transition duration-300">
          Shop Now
        </button>
      </div>
      <div className="w-full lg:w-[60%] mx-auto lg:mx-0">
        <img className="rounded-lg w-full" src={image} alt="Fresh Vegetables and Spices" />
      </div>
    </section>
  );
}
