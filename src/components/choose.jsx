import React from "react";

export default function Choice() {
  return (
    <section className="choices">
      <h2>Why choose <span>Us</span> ?
      </h2>
      <div className="choices-ctn">
        <div  className="choice-card">
          <h3>Freshness Guaranteed</h3>
          <p>
            Our vegetables are sourced directly from local farms, ensuring that
            you receive the freshest produce with every order. 
          </p>
        </div>
        <div className="choice-card">
            <h3>wide variety of organic options</h3>
            <p> Explore a diverse range of organic and specialty vegetables to suit all tastes.</p>
        </div>
        <div className="choice-card">
            <h3>convenient delivery and competitive prices</h3>
            <p> Enjoy reliable delivery and great prices on high-quality produce delivered to your door.</p>
        </div>
      </div>
    </section>
  );
}
