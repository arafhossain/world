import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>You can reach me through the following methods:</p>
      <ul className="contact-list">
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/arafhossain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/arafhossain
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/arafhossain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/arafhossain
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
