import React, { useState, useEffect } from "react";
import Card from "../../components/productCard";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

const pageVariants = {
  initial: { x: "100vw", opacity: 0 }, // Start from the right
  animate: { x: 0, opacity: 1 }, // Slide to center
  exit: { x: "-100vw", opacity: 0 },
};
const pageTransition = { type: " tween", duration: 0.5 };

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
        setError("Failed to fetch products . Please try again later.");
      });
  }, []);
  return (
    <>
      <nav className="text-sm flex flex-row gap-2 p-2  ">
        <NavLink to="cart" className="text-blue-500 hover:underline">
          {" "}
          view cart
        </NavLink>
        <NavLink to="AddProduct" className="text-blue-500 hover:underline">
          {" "}
          Add Products
        </NavLink>
      </nav>

      <div className="cont">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="flex  items-start justify-start"
          >
            <div className="grid grid-cols-1 gap-x-1  md:grid-cols-7   sm:grid-cols-2 mx-auto">
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
          </motion.div>
        )}
      </div>
    </>
  );
}
