import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa"; // Importing an icon for the card front

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
    }, 10000); // Adjust to control how long the card stays flipped
  };

  return (
    <section className="choices">
      <h2>
        Why choose <span>Us</span>?
      </h2>
      <div className="choices-ctn">
        {choiceData.map((choice, index) => (
          <div
            key={index}
            className={`choice-card ${flipped[index] ? "flipped" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <FaLeaf className="icon" /> {/* Using an icon on the front */}
              </div>
              <div className="card-back">
                <div className="card-content">
                  <h3>{choice.title}</h3>
                  <p>{choice.description}</p>
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
