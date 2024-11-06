import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function Card({ imageSrc, title, description, price, id }) {
  const { addToCart } = useCart();

  const handleItem = () => {
    const product = {
      id,
      imageSrc,
      title,
      price,
      quantity: 1,
    };
    addToCart(product);
  };

  return (
    <div
      className="card w-[150px] bg-lime-200 h-[280px]  mx-3  my-3 border border-gray-300 rounded-lg shadow-lg  "
      id={id}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-1/2 object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="px-2 py-1 text-left flex flex-col justify-start gap-1 ">
        <h2 className="text-md font-bold ">{title}</h2>

        <Link to={`details/${id}`} className="text-sm text-blue-600 truncate">
          {" "}
          {description}
        </Link>
        <p className="text-md font-semibold text-gray-900 ">${price}</p>
      </div>
      <button
        className="bg-blue-500 text-white text-xs px-2 py-2 mx-2 my-3 rounded-md transition-transform 
             hover:bg-blue-400 hover:scale-105 active:bg-blue-600"
        onClick={handleItem}
      >
        AddToCart
      </button>
    </div>
  );
}
