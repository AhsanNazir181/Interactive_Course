import React from "react";
import "./Education.css";

function Education({ education }) {
  return (
    <section className="education">
      <h2>Education and Training</h2>
      <h3>{education.degree}</h3>
      <p>
        <strong>University:</strong> {education.university} |{" "}
        <strong>Duration:</strong> {education.duration}
      </p>
      <p>
        <strong>Field of Study:</strong> {education.field}
      </p>
    </section>
  );
}

export default Education;
