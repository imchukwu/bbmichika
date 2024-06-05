import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>BB Michika & Associates</h1>
        <p>
          Trusted Legal Counsel in Nigeria. BB Michika & Associates offers comprehensive
          legal services for businesses and individuals. Our experienced team
          provides strategic advice and strong representation across various
          legal disciplines.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Hero;
