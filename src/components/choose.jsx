import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";

export default function Choice() {
  const [flipped, setFlipped] = useState({});

  const handleMouseEnter = (index) => {
    setFlipped((prevState) => ({
      ...prevState,
      [index]: true,
    }));

    setTimeout(() => {
      setFlipped((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    }, 20000); // Adjust to control how long the card stays flipped
  };

  return (
    <section className="flex flex-col  items-center gap-8 mb-8">
      <h2 className="text-4xl font-semibold">
        Why choose <span className="text-lime-500">Us</span>?
      </h2>
      <div className="flex justify-center gap-5">
        {choiceData.map((choice, index) => (
          <div
            key={index}
            className={`relative w-72 h-48 p-5 bg-white shadow-lg rounded-lg cursor-pointer transition-transform duration-[800ms] perspective-1000 ${
              flipped[index] ? "transform rotate-y-180" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {/* Inner card for front and back */}
            <div className="w-full h-full transition-transform duration-[800ms] transform-style-3d">
              {/* Front of the card */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-gray-200 ">
                <FaLeaf className="text-4xl text-green-500" />
              </div>
              {/* Back of the card */}
              <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-white transform rotate-y-180 rounded-md p-10">
                <div className="text-center text-gray-800">
                  <h3 className="text-lg font-semibold">{choice.title}</h3>
                  <p className="text-sm">{choice.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const choiceData = [
  {
    title: "Freshness Guaranteed",
    description:
      "Our vegetables are sourced directly from local farms, ensuring that you receive the freshest produce with every order.",
  },
  {
    title: "Wide Variety of Organic Options",
    description:
      "Explore a diverse range of organic and specialty vegetables to suit all tastes.",
  },
  {
    title: "Convenient Delivery and Competitive Prices",
    description:
      "Enjoy reliable delivery and great prices on high-quality produce delivered to your door.",
  },
];
