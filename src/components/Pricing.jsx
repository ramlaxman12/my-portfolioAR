import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <h1 className="pricing-heading">Pricing Plans</h1>
      <p className="pricing-subtitle">
        Pricing may vary based on project complexity and requirements.
      </p>

      <div className="pricing-grid">

        {/* Website Development */}
        <div className="pricing-card">
          <div className="plan-header">Website Development</div>

          <h2 className="plan-price">Starting at ₹14,000</h2>

          <ul className="plan-features">
            <li><FaCheckCircle /> Responsive Design</li>
            <li><FaCheckCircle /> SEO Optimization</li>
            <li><FaCheckCircle /> Fast Loading Speed</li>
            <li><FaCheckCircle /> Custom UI/UX</li>
          </ul>

          <button className="plan-btn">Get Started</button>
        </div>

        {/* Mobile App - Popular */}
        <div className="pricing-card popular-card">
          <span className="popular-ribbon">Popular</span>

          <div className="plan-header">Mobile App Development</div>

          <h2 className="plan-price">Starting at ₹32,000</h2>

          <ul className="plan-features">
            <li><FaCheckCircle /> Android & iOS Development</li>
            <li><FaCheckCircle /> Bug-Free Code</li>
            <li><FaCheckCircle /> Modern UI/UX</li>
            <li><FaCheckCircle /> App Deployment</li>
          </ul>

          <button className="plan-btn popular-btn">Get Started</button>
        </div>

        {/* Design + Marketing */}
        <div className="pricing-card">
          <div className="plan-header">Design, Branding & Marketing</div>

          <h2 className="plan-price">Starting at ₹5,000</h2>

          <ul className="plan-features">
            <li><FaCheckCircle /> Social Media Banners</li>
            <li><FaCheckCircle /> Logo & Icon Design</li>
            <li><FaCheckCircle /> Brand Strategy</li>
            <li><FaCheckCircle /> Ad Campaign Management</li>
          </ul>

          <button className="plan-btn">Get Started</button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
