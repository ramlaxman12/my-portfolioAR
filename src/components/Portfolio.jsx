import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "Agency website & mobile app built using React Vite",
    desc:
      "Built a dynamic agency website from ground up. Created a seamless user experience with responsive design, intuitive navigation, and modern UI using HTML, SCSS, Bootstrap, JavaScript, and React Vite.",
    img: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
    github: "#",
    demo: "#",
  },
  {
    title: "Food Basket",
    desc:
      "A React/Vite food delivery app using Context API for global state, cart functionality, login modal, and reusable UI components.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    github: "#",
    demo: "#",
  },
  {
    title: "Live weather forecast website",
    desc:
      "Integrated public APIs to display live weather conditions with responsive UI — Technologies: HTML, CSS, Bootstrap, JQuery.",
    img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea", // FIXED IMAGE
    github: "#",
    demo: "#",
  },
  {
    title: "My Home Project",
    desc:
      "A real-estate platform for materials, labor, and builder booking using React, Supabase, Vite, and Redux Toolkit.",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    github: "#",
    demo: "#",
  },
  {
    title: "Expense Tracker",
    desc:
      "A responsive UI to track and visualize daily expenses. Built with Bootstrap Grid, Flexbox, HTML, CSS, and JavaScript.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
    github: "#",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">My Portfolio</h2>
      
      <p className="portfolio-sub">
        Showcasing my latest work and creative solutions
      </p>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img className="project-img" src={p.img} alt={p.title} />

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="btn-group">
                <a href={p.github} className="btn github-btn" target="_blank">
                  GitHub
                </a>
                <a href={p.demo} className="btn demo-btn" target="_blank">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
