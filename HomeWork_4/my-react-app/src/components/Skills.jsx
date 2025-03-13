import React from "react";
import "./Skills.css";

function Skills({ skills }) {
  return (
    <section className="skills">
      <h2>Digital Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
