import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Content */}
        <div className="about-content">

          <h2 className="about-title">
            About <span>Me</span>
          </h2>
          <br></br>

          <p className="about-text">
            A passionate Full-Stack Developer with hands-on experience in building
            responsive and user-friendly web applications. Skilled in
            JavaScript, React.js, HTML5, CSS3, Tailwind CSS, Redux Toolkit, and UI/UX
            design. Strong background in developing intuitive interfaces, optimizing
            web performance, and collaborating with teams to deliver high-quality
            digital solutions. Quick learner with a keen eye for detail, dedicated
            to creating seamless user experiences and scalable applications.
          </p>

          {/* Skills */}
          
          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Tailwind CSS</span>
            <span>Redux Toolkit</span>
            <span>UI/UX Design</span>
          </div>

          {/* Experience Boxes */}
          <div className="experience-boxes">
            <div className="exp-box">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="exp-box">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="exp-box">
              <h3>8+</h3>
              <p>Happy Clients</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="about-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
