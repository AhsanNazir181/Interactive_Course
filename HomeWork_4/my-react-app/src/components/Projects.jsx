import React from "react";
import "./Projects.css";

function Projects({ projects }) {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
