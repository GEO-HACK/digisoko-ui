import React, { useState, useEffect } from "react";
import Card from "../../components/productCard";

import { NavLink } from "react-router-dom";

export default function Products() {
  const [products, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
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
        <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 gap-x-1  md:grid-cols-5   sm:grid-cols-2 mx-auto">
            {products.map((product) => (
             <div key={product.id} className="p-2 text-sm">
               <Card
                id={product.id}
                imageSrc={`http://127.0.0.1:8000/${product.image}`}
                title={product.name}
                description={product.description}
                price={product.price}
              />
             </div>
            ))}
          </div>
        </div>
        )
    }

     
      </div>
    </>
  );
}
