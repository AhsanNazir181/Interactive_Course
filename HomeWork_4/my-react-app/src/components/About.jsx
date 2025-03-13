import React from "react";
import "./About.css";

function About({ about }) {
  return (
    <section className="about">
      <h2>About Myself</h2>
      <p>{about}</p>
    </section>
  );
}

export default About;
