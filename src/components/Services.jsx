import React from "react";
import "./Services.css";
import {
  FaCode,
  FaShoppingCart,
  FaMobileAlt,
  FaChartLine,
  FaPalette,
  FaCogs,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">My Services</h2>
      <p className="services-subtitle">
        Comprehensive solutions to bring your digital vision to life
      </p>

      <div className="services-container">

        {/* 1. Website Development */}
        <div className="service-card">
          <div className="service-icon">
            <FaCode />
          </div>
          <h3>Custom Website Development</h3>
          <p>
            From concept to deployment, I create responsive, modern websites
            tailored to your business needs using the latest technologies.
          </p>
          <ul className="service-list">
            <li>Responsive Design</li>
            <li>Modern Frameworks</li>
            <li>SEO Optimization</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        {/* 2. E-commerce */}
        <div className="service-card">
          <div className="service-icon">
            <FaShoppingCart />
          </div>
          <h3>E-commerce Solutions</h3>
          <p>
            Build powerful online stores that convert visitors into customers
            with seamless shopping experiences and secure payment processing.
          </p>
          <ul className="service-list">
            <li>Payment Integration</li>
            <li>Inventory Management</li>
            <li>User Experience Design</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>

        {/* 3. Mobile Apps */}
        <div className="service-card">
          <div className="service-icon">
            <FaMobileAlt />
          </div>
          <h3>Mobile App Development</h3>
          <p>
            Native and cross-platform mobile applications that provide
            exceptional user experiences across all devices.
          </p>
          <ul className="service-list">
            <li>Cross-platform Development</li>
            <li>Native Performance</li>
            <li>App Store Optimization</li>
            <li>Push Notifications</li>
          </ul>
        </div>

        {/* 4. Social Media Marketing */}
        <div className="service-card">
          <div className="service-icon">
            <FaChartLine />
          </div>
          <h3>Social Media Marketing</h3>
          <p>
            Strategic social media campaigns that increase brand awareness,
            engagement, and drive qualified leads to your business.
          </p>
          <ul className="service-list">
            <li>Content Strategy</li>
            <li>Paid Advertising</li>
            <li>Community Management</li>
            <li>Performance Analytics</li>
          </ul>
        </div>

        {/* 5. UI/UX Design */}
        <div className="service-card">
          <div className="service-icon">
            <FaPalette />
          </div>
          <h3>UI/UX Design</h3>
          <p>
            User-centered design solutions that create intuitive, engaging
            interfaces that users love and businesses benefit from.
          </p>
          <ul className="service-list">
            <li>User Research</li>
            <li>Wireframing & Prototyping</li>
            <li>Visual Design</li>
            <li>Usability Testing</li>
          </ul>
        </div>

        {/* 6. API Integration */}
        <div className="service-card">
          <div className="service-icon">
            <FaCogs />
          </div>
          <h3>API Integration</h3>
          <p>
            Seamless integration of third-party services and APIs to enhance
            functionality and automate business processes.
          </p>
          <ul className="service-list">
            <li>RESTful APIs</li>
            <li>Database Integration</li>
            <li>Third-party Services</li>
            <li>Data Synchronization</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Services;
