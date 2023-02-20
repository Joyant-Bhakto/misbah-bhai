import React from "react";
import hero from "./Images/Hero_image.gif";
import "./Home.css";

const Hero = () => {
  return (
    <section className="container">
      <div className="hero">
        <div className="hero_text">
          <h1>
            Hi, I'm Md Mezba, <br />A <span>product designer</span> Based in
            Bangladesh
          </h1>
          <p>
            Being a Engineering student, i like to combine creative thinking
            with an analytical mindset to make sense of complexities also create
            a product which can create a <u> Great Experience </u> and also can
            draw a <u>Good Revenue.</u>
          </p>
        </div>
        <div className="hero_photo">
          <img src={hero} alt="logo"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
