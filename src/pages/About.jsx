import React from "react";
import image from "../assets/images/image3.avif";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 lg:px-10 py-10">
      {/* Section 1 */}
      <section className="bg-white flex flex-col lg:flex-row justify-center items-center gap-8 p-6 shadow-lg rounded-lg mb-10 w-full max-w-5xl">
        <img
          src={image}
          className="w-full lg:w-1/2 rounded-lg object-cover"
          alt="About"
        />
        <div className="text-center lg:text-left flex flex-col justify-center gap-4 p-4">
          <p className="text-gray-700 text-lg leading-relaxed">
          At the heart of every meal is fresh, delicious fruit. But what if you could get those juicy apples, ripe bananas, and fresh strawberries delivered to you with just a click? Welcome to DigiSoko, where convenience meets health in the most refreshing way! Whether you’re preparing a snack, smoothie, or a wholesome meal, we believe your kitchen should never be without the best nature has to offer. Let us handle the delivery while you enjoy the fruits of life!
          </p>
        </div>
      </section>

      {/* Section 2 (Reverse) */}
      <section className="bg-white flex flex-col lg:flex-row-reverse justify-center items-center gap-8 p-6 shadow-lg rounded-lg mb-10 w-full max-w-5xl">
        <img
          src={image}
          className="w-full lg:w-1/2 rounded-lg object-cover"
          alt="Our Mission"
        />
        <div className="text-center lg:text-left flex flex-col justify-center gap-4 p-4">
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
      </section>

      {/* Section 3 */}
      <section className="bg-white flex flex-col lg:flex-row justify-center items-center gap-8 p-6 shadow-lg rounded-lg mb-10 w-full max-w-5xl">
        <img
          src={image}
          className="w-full lg:w-1/2 rounded-lg object-cover"
          alt="Our Vision"
        />
        <div className="text-center lg:text-left flex flex-col justify-center gap-4 p-4">
          <h2 className="text-3xl font-semibold text-lime-500">
            Our <span className="text-gray-800">Vision</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
          Our vision is to become the leading online platform for fresh fruit sales, known for exceptional service, quality, and commitment to sustainability. We aim to revolutionize the way people access fresh produce, making healthy eating more accessible and convenient for everyone
          </p>
        </div>
      </section>
    </div>
  );
}
