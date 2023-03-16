import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact me</h1>
      <a href="mailto:pelagenkolena@gmail.com"> <h4><FontAwesomeIcon icon={faEnvelope} /> pelagenkolena@gmail.com</h4></a>
      <h4> <FontAwesomeIcon icon={faLocationDot} /> London, UK</h4>
      <a href="https://www.linkedin.com/in/olena-pelagenko/"> <h4><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</h4></a>
      <a href="https://github.com/ljenchik"> <h4><FontAwesomeIcon icon={faGithub} />Github</h4></a>
    </div>
  );
}

export default Contact;
