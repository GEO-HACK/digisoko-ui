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
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories and products
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
        setProducts(data.products);
      })
      .catch(() => {
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
      .catch(() => {
        setError("Failed to fetch products. Please try again later.");
      });
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <div className="filter-bar p-2 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Category Filter */}
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                <label
                  htmlFor="category"
                  className="mb-1 sm:mb-0 mr-2 font-semibold text-gray-700 text-center sm:text-left"
                >
                  Category:
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="border rounded-lg p-2 w-full sm:w-auto focus:outline-none bg-white focus:border-blue-500 transition duration-150"
                >
                  <option value="">All</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring focus:ring-blue-500 transition duration-150"
                />
              </div>
            </div>

            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
              className="flex items-start justify-start"
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 gap-x-1 gap-y-4 mx-auto">
                {filteredProducts.map((product) => (
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
