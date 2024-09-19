import React from "react";
import image from "../assets/images/image3.avif";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 lg:px-10 py-10">
      {/* Section 1 */}
      <section className="bg-white flex flex-col lg:flex-row justify-center items-center gap-8 p-6 shadow-lg rounded-lg mb-10 w-full max-w-5xl">
        <img src={image} className="w-full lg:w-1/2 rounded-lg object-cover" alt="About" />
        <div className="text-center lg:text-left flex flex-col justify-center gap-4 p-4">
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi
            debitis culpa iste eligendi! Cupiditate eum ut quidem debitis omnis
            delectus aspernatur, rem quo maiores atque non reiciendis quis totam.
          </p>
        </div>
      </section>

      {/* Section 2 (Reverse) */}
      <section className="bg-white flex flex-col lg:flex-row-reverse justify-center items-center gap-8 p-6 shadow-lg rounded-lg mb-10 w-full max-w-5xl">
        <img src={image} className="w-full lg:w-1/2 rounded-lg object-cover" alt="Our Mission" />
        <div className="text-center lg:text-left flex flex-col justify-center gap-4 p-4">
          <h2 className="text-3xl font-semibold text-lime-500">Our <span className="text-gray-800">Mission</span></h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi
            debitis culpa iste eligendi! Cupiditate eum ut quidem debitis omnis
            delectus aspernatur, rem quo maiores atque non reiciendis quis totam.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white flex flex-col lg:flex-row justify-center items-center gap-8 p-6 shadow-lg rounded-lg mb-10 w-full max-w-5xl">
        <img src={image} className="w-full lg:w-1/2 rounded-lg object-cover" alt="Our Vision" />
        <div className="text-center lg:text-left flex flex-col justify-center gap-4 p-4">
          <h2 className="text-3xl font-semibold text-lime-500">Our <span className="text-gray-800">Vision</span></h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi
            debitis culpa iste eligendi! Cupiditate eum ut quidem debitis omnis
            delectus aspernatur, rem quo maiores atque non reiciendis quis totam.
          </p>
        </div>
      </section>
    </div>
  );
}
