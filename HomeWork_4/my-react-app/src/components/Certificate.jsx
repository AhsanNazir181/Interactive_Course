import React from "react";
import "./Certificate.css";

function Certificates({ certificates }) {
  return (
    <section className="certificates">
      <h2>Certificates</h2>
      {certificates.map((certificate, index) => (
        <div key={index}>
          <h3>{certificate.title}</h3>
          <p>
            <strong>Issuer:</strong> {certificate.issuer}
          </p>
          <p>{certificate.description}</p>
          <p>
            <strong>Link:</strong>{" "}
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {certificate.link}
            </a>
          </p>
        </div>
      ))}
    </section>
  );
}

export default Certificates;
