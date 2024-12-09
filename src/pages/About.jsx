import React from "react";
import mission from "../assets/images/mission.avif";
import vision from "../assets/images/vision.jpg";
import { FiHeart, FiShield, FiTarget, FiTrendingUp } from "react-icons/fi";
import { FaLeaf} from "react-icons/fa"

export default function About() {


  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Hero Section with Video Background */}
      <div className="w-full h-[250px] relative flex flex-col justify-center items-center bg-lime-600">
        <h1 className="text-6xl text-white font-bold  ">About Us</h1>
        <p className=" text-md font-semibold text-white mt-2">
          Digisoko is a market that allows a person to access all of the items
          that are homegrown{" "}
        </p>
      </div>

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
      <section className="w-full px-10 text-center p-6 bg-gradient-to-r from-white to-lime-50 shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold text-lime-500 mb-4">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <FiHeart className="text-4xl text-lime-500 mx-auto mb-2" />
            <h3 className="font-medium text-gray-800">Customer Focus</h3>
            <p className="text-sm text-gray-600">
              We prioritize our customers' needs and satisfaction above all.
            </p>
          </div>
          <div>
            <FiShield className="text-4xl text-lime-500 mx-auto mb-2" />
            <h3 className="font-medium text-gray-800">Integrity</h3>
            <p className="text-sm text-gray-600">
              We operate with honesty and transparency in all our dealings.
            </p>
          </div>
          <div>
            <FaLeaf className="text-4xl text-lime-500 mx-auto mb-2" />
            <h3 className="font-medium text-gray-800">Sustainability</h3>
            <p className="text-sm text-gray-600">
              We are committed to eco-friendly practices and supporting local
              farmers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
