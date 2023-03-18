import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
       <div className="footer-container">
        <a href="mailto:pelagenkolena@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
        <a href="https://www.linkedin.com/in/olena-pelagenko/"><FontAwesomeIcon icon={faLinkedin} size="2x"/> </a>
        <a href="https://github.com/ljenchik"> <FontAwesomeIcon icon={faGithub} size="2x"/> </a>
      </div>
    </footer>
  );
}

export default Footer;
