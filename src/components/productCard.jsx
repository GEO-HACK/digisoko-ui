import React from 'react'
import { useCart } from '../context/cartContext'


export default function  Card({ imageSrc, title, description, price, id}){


  const  { addToCart }  = useCart();

  const handleItem =() => {
    const product = { imageSrc, title, price };
    addToCart(product)
  }

    return(
        <div className="card"id={id} >
        <img src={imageSrc} alt={title} className="card__image" />
        <div className="card__details">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <p className="card__price">${price}</p>
        </div>
        <button className='card-btn' onClick={handleItem}>AddToCart</button>
      </div>

    )
}