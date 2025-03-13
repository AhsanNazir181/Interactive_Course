import React from "react";
import "./WorkExperience.css";

function WorkExperience({ workExperience }) {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <h3>{workExperience.position}</h3>
      <p>
        <strong>Company:</strong> {workExperience.company} |{" "}
        <strong>Duration:</strong> {workExperience.duration}
      </p>
      <ul>
        {workExperience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <p>
        <strong>Business or Sector:</strong> {workExperience.sector}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={workExperience.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {workExperience.website}
        </a>
      </p>
    </section>
  );
}

export default WorkExperience;
