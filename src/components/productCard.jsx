import React from 'react'
import { useCart } from '../context/cartContext'


export default function  Card({ imageSrc, title, description, price, id}){


  const  { addToCart }  = useCart();

  const handleItem =() => {
    const product = { imageSrc, title, price };
    addToCart(product)
  }

    return(
        <div className="card max-w-xs mx-auto border border-gray-300 rounded-lg shadow-lg  transition-transform hover:shadow=xl hover:scale-105"id={id} >
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <p className="text-lg font-semibold text-gray-900">${price}</p>
        </div>
        <button className='bg-blue-500 text-white px-2 py-2 rounded-md mx-4 my-2 transition-transform hover:bg-blue-400 hover:scale-105 active:bg-blue-600' onClick={handleItem}>AddToCart</button>
      </div>

    )
}