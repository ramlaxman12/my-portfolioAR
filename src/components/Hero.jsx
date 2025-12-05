import React from "react";
import "./Hero.css";
import profileImg from "../assets/akhil/profile.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, I'm <span className="gold">AKHIL</span>
        </h1>

        <h2 className="hero-role">Building Exceptional Digital Experiences</h2>

        <p className="hero-desc">
          Full-Stack Developer specializing in modern frameworks. I transform ideas into clean, responsive, and data-driven solutions that drive business growth.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">VIEW MY WORK</a>
          <a href="#contact" className="btn outline">Start a Project</a>
          
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-shape"></div>

        <div className="hero-image-wrapper">
          <img src={profileImg} alt="Profile" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
