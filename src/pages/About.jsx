import React from "react";
import { FiTarget, FiTrendingUp } from "react-icons/fi"; // Importing icons
import videoBg from "../assets/video.mp4";
import mission from "../assets/images/mission.avif";
import vision from "../assets/images/vision.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

export default function About() {
  const navigate = useNavigate()

  const handleShopNow = () =>{
    navigate("/products")

  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Hero Section with Video Background */}
     

      {/* Mission Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-8 p-6 bg-gradient-to-r from-lime-50 to-white shadow-lg rounded-lg mb-10 w-full max-w-5xl border-l-4 border-lime-500 my-10">
        <div className="text-center lg:text-left flex flex-col justify-center gap-4 p-4 lg:w-2/3">
          <FiTarget className="text-lime-500 text-5xl mb-4 mx-auto lg:mx-0" />{" "}
          {/* Mission Icon */}
          <h2 className="text-3xl font-semibold text-lime-500">
            Our <span className="text-gray-800">Mission</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to provide fresh, high-quality fruits directly to our
            customers' doorsteps with just the click of a button. We strive to
            offer a convenient and seamless shopping experience that promotes
            healthy living and supports local farmers by sourcing produce from
            trusted suppliers.
          </p>
        </div>
        <img
          src={mission} // Replace with actual image path
          className="w-full lg:w-1/3 rounded-lg object-cover shadow-md"
          alt="Our Mission"
        />
      </section>

      {/* Vision Section */}
      <section className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8 p-6 bg-gradient-to-r from-lime-50 to-white shadow-lg rounded-lg mb-10 w-full max-w-5xl border-l-4 border-lime-500">
        <div className="text-center lg:text-left flex flex-col justify-center gap-4 p-4 lg:w-2/3">
          <FiTrendingUp className="text-lime-500 text-5xl mb-4 mx-auto lg:mx-0" />{" "}
          {/* Vision Icon */}
          <h2 className="text-3xl font-semibold text-lime-500">
            Our <span className="text-gray-800">Vision</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision is to become the leading online platform for fresh fruit
            sales, known for exceptional service, quality, and commitment to
            sustainability. We aim to revolutionize the way people access fresh
            produce, making healthy eating more accessible and convenient for
            everyone.
          </p>
        </div>
        <img
          src={vision} // Replace with actual image path
          className="w-full lg:w-1/3 rounded-lg object-cover shadow-md"
          alt="Our Vision"
        />
      </section>
    </div>
  );
}
