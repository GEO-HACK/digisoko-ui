import React from "react";
import image from "../assets/images/image1.webp";

export default function Hero() {
  return (
    <section className="hero-ctn">
      <div className="hero-details">
        <h1 className="title">
          Fresh <span>Vegetables</span>& <span>Spices</span> for culinary
          Delight
        </h1>
        <h3>Fresh,flavorful,and ready to elevate your cooking</h3>
        <p>
          Explore our selection of farm-fresh vegetables and aromatic spices.
          Perfect for home cooks and chefs alike, our products are chosen for
          their quality and taste.
        </p>
        
        <button className="hero-btn">Shop Now</button>
      </div>
      <div className="hero-img">
        <img className="img" src={image} alt="" />
      </div>
    </section>
  );
}
