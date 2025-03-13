import React from "react";
import "./Header.css";

function Header({ name, dob, nationality, sex, phone, email, address }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>
        <strong>Date of Birth:</strong> {dob} | <strong>Nationality:</strong>{" "}
        {nationality} | <strong>Sex:</strong> {sex}
      </p>
      <p>
        <strong>Phone:</strong> {phone} | <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
    </header>
  );
}

export default Header;
