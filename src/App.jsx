import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Pricing from "./components/Pricing";
import Footer from './components/Footer';

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Call to Action Section */}
      <section id="cta">
        <CTA />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
