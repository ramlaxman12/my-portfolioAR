import React from "react";
import "./cta.css";
import { FiSend } from "react-icons/fi";
import { BsHeadset, BsShieldCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        

        <h1 className="cta-title">
          Ready to Bring Your Vision to Life?
        </h1>

        <p className="cta-subtitle">
          Let’s collaborate and craft a digital presence that looks stunning, works flawlessly, 
          and delivers real business results.
        </p>

        {/* New extra benefit line */}
        <p className="cta-extra">
          I help brands, creators, and businesses transform ideas into high-performing digital products.
        </p>

        {/* CTA BUTTONS */}
        <div className="cta-buttons">
          <button className="primary-btn">
            <FiSend size={20} /> Get a Quote
          </button>

          <button className="outline-btn">
            Book Free Consultation
          </button>
        </div>

        {/* TRUST BAR */}
        <div className="cta-trust">
          <p>⭐ Trusted by 50+ Clients · 🚀 100+ Projects Delivered</p>
        </div>

        {/* FEATURES */}
        <div className="cta-features">

          <div className="feature-box">
            <AiOutlineClockCircle className="feature-icon" />
            <span>Quick Turnaround</span>
          </div>

          <div className="feature-box">
            <BsShieldCheck className="feature-icon" />
            <span>Quality Guaranteed</span>
          </div>

          <div className="feature-box">
            <BsHeadset className="feature-icon" />
            <span>24/7 Support</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;
