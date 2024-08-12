import React from "react";
import image from "../assets/images/image3.avif";

export default function () {
  return (
    <div className="about-ctn">
      <section className="about-section">
        <img src={image} className="image" />
        <div className="about-details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi
            debitis culpa iste eligendi! Cupiditate eum ut quidem debitis omnis
            delectus aspernatur, rem quo maiores atque non reiciendis quis
            totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit aperiam fugit, omnis ad quod blanditiis quibusdam
            tempora nesciunt eos placeat beatae voluptate natus, nam magnam
            veritatis ullam id amet reiciendis!
          </p>
        </div>
      </section>
      <section className="about-section reverse">
        <img src={image} className="image" />
        <div className="about-details">
            <h2>Our <span>Mission</span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi
            debitis culpa iste eligendi! Cupiditate eum ut quidem debitis omnis
            delectus aspernatur, rem quo maiores atque non reiciendis quis
            totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit aperiam fugit, omnis ad quod blanditiis quibusdam
            tempora nesciunt eos placeat beatae voluptate natus, nam magnam
            veritatis ullam id amet reiciendis!
          </p>
        </div>
      </section> 
      <section className="about-section">
        <img src={image} className="image" />
        <div className="about-details">
        <h2>Our <span>Vission</span></h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi
            debitis culpa iste eligendi! Cupiditate eum ut quidem debitis omnis
            delectus aspernatur, rem quo maiores atque non reiciendis quis
            totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit aperiam fugit, omnis ad quod blanditiis quibusdam
            tempora nesciunt eos placeat beatae voluptate natus, nam magnam
            veritatis ullam id amet reiciendis!
          </p>
        </div>
      </section>
    </div>
  );
}
