// src/components/Hero/Hero.jsx
import React from "react";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import "./Hero.css";

const Hero = () => {
  return (
    <header
      id="home"
      className="d-flex align-items-center justify-content-center position-relative"
    >
      <div className="container w-75">
        <div className="hero-content">
          <HeroTitle />
          <HeroDescription />
          <HeroButtons />
        </div>
      </div>
    </header>
  );
};

export default Hero;
