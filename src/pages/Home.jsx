import React, { useState, useEffect } from "react";
// import Card from "../components/productCard";
import Hero from "../components/Hero";
import Choice from "../components/choose";
import HomeProd from "../components/homeprod";
import image1 from "../assets/images/vision.jpg";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate= useNavigate()
  const GoToAbout =()=> {
    navigate('/about')
    window.scrollTo(0, 0);
  }
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

        <div className="flex gap-4 bg-lime-500">
          <div className="flex-1  ">
            <img src={image1} alt=" About us image" className=" rounded-lg p-6" />
          </div>
          <div className="flex-1 flex flex-col items-center m-auto gap-4 text-gray-100">
            <h1 className="text-6xl font-bold ">About Us</h1>
            <p className="text-md font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              tempore corrupti error fugit, dolore explicabo quae mollitia
              temporibus cupiditate corporis aut. Molestias, numquam quia quam
              obcaecati nesciunt eveniet porro possimus.
            </p>
            <button
            onClick={GoToAbout}
             className="px-5 py-2 rounded-lg border border-lime-100 bg-lime-50 text-lime-400 font-bold hover:bg-transparent">Learn More</button>
          </div>
        </div>

        <Choice />
      </div>
    </>
  );
}
