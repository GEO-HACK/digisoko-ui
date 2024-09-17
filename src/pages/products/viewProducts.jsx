import React, { useState, useEffect } from "react";
import Card from "../../components/productCard";

import { NavLink } from "react-router-dom";

export default function Products() {
  const [products, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/home")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((error) => {
          setError("Failed to fetch products . Please try again later.")

      }
    );
  }, []);
  return (
    <>
      <nav className="product-nav">
        <NavLink to="cart"> view cart</NavLink>
        <NavLink to="AddProduct"> Add Products</NavLink>
      </nav>

      <div className="cont">
        {error ?(
            <div className="error-message">
                {error}
                </div>
        )
        :
        (
            <div className="grid grid-cols-5 gap-x-5 ">
            {products.map((product) => (
             <div key={product.id} className="mb-4">
               <Card
                id={product.id}
                imageSrc={`http://localhost:8000/${product.image}`}
                title={product.name}
                description={product.description}
                price={product.price}
              />
             </div>
            ))}
          </div>
        )
    }

     
      </div>
    </>
  );
}
