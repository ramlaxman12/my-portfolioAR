import React from "react";
import "./Experience.css";

const experienceData = [
  {
    title: "Web Developer",
    role: "Freelancer",
    years: "3+ Years",
    desc: "Building responsive, fast, and modern websites using React, JavaScript, HTML, CSS, Tailwind, and Next.js.",
  },
  {
    title: "UI/UX Design",
    role: "Freelancer",
    years: "2+ Years",
    desc: "Designing user-friendly interfaces using Figma, wireframes, prototypes, and UI/UX principles.",
  },
  {
    title: "Social Media Marketing",
    role: "Freelancer",
    years: "2+ Years",
    desc: "Managing Instagram & Facebook growth, branding, ads optimization, and content strategy.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="exp-section">
      <h1 className="exp-heading">My Experience</h1>

      <div className="exp-grid">
        {experienceData.map((exp, index) => (
          <div key={index} className="exp-card">
            <h2 className="exp-title">{exp.title}</h2>
            <p className="exp-role">{exp.role}</p>
            <p className="exp-years">{exp.years}</p>
            <p className="exp-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
