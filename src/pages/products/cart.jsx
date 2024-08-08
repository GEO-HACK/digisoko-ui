import React from  'react';
import { useCart } from '../../context/cartContext'
import { Link } from 'react-router-dom'

export default function Cart(){
    const {cart} = useCart();
    console.log(cart)

    return(
        <div className="cart">
            <Link to='..'>&larr;<span>Back to all products</span></Link>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageSrc} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))
        )}
      </div>

    )
}