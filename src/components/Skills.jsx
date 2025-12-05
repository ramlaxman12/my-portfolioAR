// Skills.jsx
import React from "react";
import "./Skills.css";

// Import Icons
import { FaPython, FaReact, FaBootstrap, FaFigma, FaNodeJs, FaChartBar } from "react-icons/fa";
import { 
  SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiMysql, 
  SiAdobephotoshop, SiGoogleads, SiFacebook, SiInstagram 
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Next JS", icon: <SiNextdotjs /> },
  { name: "Node JS", icon: <FaNodeJs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Power BI", icon: <FaChartBar /> }, // Safe alternative
  { name: "MS Excel", icon: "📊" },
  { name: "Figma", icon: <FaFigma /> },
  { name: "UI/UX Designer", icon: "🎨" },
  { name: "Graphic Designer", icon: <SiAdobephotoshop /> },
  { name: "Facebook Marketing", icon: <SiFacebook /> },
  { name: "Instagram Marketing", icon: <SiInstagram /> },
  { name: "Google Ads", icon: <SiGoogleads /> },
];

const Skills = () => {
  return (
    <section id="myskills" className="skills-section">
      <h1 className="heading">My Skills</h1>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
