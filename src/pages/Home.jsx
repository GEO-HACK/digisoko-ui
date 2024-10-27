import React, { useState, useEffect } from "react";
import Card from "../components/productCard";
import Hero from "../components/Hero";
import Choice from "../components/choose";
import HomeProd from "../components/homeprod";

export default function Home() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setProduct(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const limitedProducts = products.slice(0, 4);

  return (
    <>
      <div className="bg-white">
        <Hero />

        <HomeProd />

        <Choice />
      </div>
    </>
  );
}
