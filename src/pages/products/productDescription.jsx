import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../../context/cartContext";

const ProductDescription = () => {
  const { id } = useParams(); // Extract product ID from the URL
  const navigate = useNavigate(); // To navigate between pages
  const { addToCart } = useCart(); // Access cart context
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const API_BASE_URL = "http://127.0.0.1:8000/products"; // Base URL for API calls

  // Fetch product details
  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`);
      const data = await response.json();
      setProduct(data);

      // Fetch related products based on the product's category
      if (data.Type?.name) {
        const relatedResponse = await fetch(
          `${API_BASE_URL}/related/${data.Type.name}`
        );
        const relatedData = await relatedResponse.json();
        setRelatedProducts(relatedData);
      }
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add product to the cart
  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
    } else {
      alert("Please select a valid quantity!");
    }
  };

  // Navigate to product details page
  const viewDetails = (relatedId) => {
    navigate(`/details/${relatedId}`);
  };

  // Fetch product details on component load or when `id` changes
  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // Loading spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin w-12 h-12 border-4 rounded-full text-blue-500"></div>
      </div>
    );
  }

  // Error message if no product is loaded
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load product. Please try again.</p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-8 px-4"
      >
        <Link to=".." className="text-blue-500 hover:underline mb-4 block">
          &larr; Back to all products
        </Link>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Product Image */}
          <div className="flex-1 lg:max-w-md">
            <img
              src={`http://127.0.0.1:8000/${product.image}`}
              alt={product.name}
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-medium text-gray-700">
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 border rounded p-1 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform transform hover:scale-105 active:scale-95"
            >
              Add to Cart
            </button>

            {/* Wishlist Button */}
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-transform transform hover:scale-105 active:scale-95 ml-4">
              ❤️ Add to Wishlist
            </button>

            {/* Product Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Details</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Type: {product.Type?.name || "N/A"}</li>
                <li>Origin: {product.origin || "N/A"}</li>
                <li>Freshness: {product.freshness || "Freshly harvested"}</li>
                {product.nutritionalValue && (
                  <li>Nutritional Value: {product.nutritionalValue}</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <div
                key={related.id}
                className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={`http://127.0.0.1:8000/${related.image}`}
                  alt={related.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{related.name}</h3>
                <p className="text-gray-600">${related.price.toFixed(2)}</p>
                <button
                  onClick={() => viewDetails(related.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-2 block w-full text-center"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductDescription;
