import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A responsive website built with React and CSS modules. Features include user authentication, data visualization, and API integration.",
      technologies: ["React", "CSS", "JavaScript", "API"],
      imageUrl: "", // Add project image later
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "An e-commerce platform with product listings, shopping cart, and checkout functionality. Built with React and integrated with a payment gateway.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "", // Add project image later
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A weather application that fetches data from a weather API and displays current conditions and forecasts for searched locations.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      imageUrl: "", // Add project image later
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              {/* Replace with actual project image */}
              <div className="image-placeholder"></div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} className="btn primary-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.codeLink} className="btn secondary-btn" target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;