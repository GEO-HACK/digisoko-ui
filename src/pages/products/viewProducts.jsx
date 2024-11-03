import React, { useState, useEffect } from "react";
import Card from "../../components/productCard";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const pageVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100vw", opacity: 0 },
};
const pageTransition = { type: "tween", duration: 0.5 };

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
        setProducts(data.products); // Initial load without filtering
      })
      
      .catch((error) => {
        setError("Failed to fetch data. Please try again later.");
      });
  }, []);

  const fetchProductsByCategory = (category) => {
    const url = new URL("http://127.0.0.1:8000/products");
    if (category) url.searchParams.append("category", category);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        setError("Failed to fetch products. Please try again later.");
      });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  return (
    <>
      <nav className="text-sm flex flex-row gap-2 p-2">
        <NavLink to="cart" className="text-blue-500 hover:underline">
          View Cart
        </NavLink>
        <NavLink to="AddProduct" className="text-blue-500 hover:underline">
          Add Products
        </NavLink>
      </nav>

      <div className="cont">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <div className="filter-bar p-2">
              <label htmlFor="category" className="mr-2">Filter by Category:</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border rounded p-1"
              >
                <option value="">All</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="flex items-start justify-start"
            >
              <div className="grid grid-cols-1 gap-x-1 md:grid-cols-7 sm:grid-cols-2 mx-auto">
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
          </>
        )}
      </div>
    </>
  );
}
