import { section } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const ProductDescription = () => {
  const { id } = useParams(); // Get the id from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(`http://127.0.0.1:8000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
     <Link 
     to=".."
     className="text-blue-500 hover:underline">
     
        &larr;<span>Back to all products</span>
      </Link>
      <div className=" w-screen h-screen  py-3">
        <div className="flex w-[1000px] mx-auto  my-auto flex-col lg:flex-row p-4 bg-lime-200 border border-collapse">
          <div className="flex-1 lg:w-1/2">
            <img
              src={`http://127.0.0.1:8000/${product.image}`}
              alt={product.name}
              className="w-[500px] h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 lg:w-1/2 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-gray-900">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
