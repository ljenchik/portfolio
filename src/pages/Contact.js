import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContacForm/ContactForm";

const Contact = () => {
    return (
        <div className="container-with-title">
            <h1 className="contact-title">Contact me</h1>
            <h2 className="contact-subtitle">
                I would be happy to hear from you!
            </h2>
            <div className="main-contact-container">
                <div className="contact-container">
                    <a href="mailto:pelagenkolena@gmail.com">
                        {" "}
                        <h4>
                            <FontAwesomeIcon icon={faEnvelope} />{" "}
                            pelagenkolena@gmail.com
                        </h4>
                    </a>
                    <a href="https://www.linkedin.com/in/olena-pelagenko/">
                        {" "}
                        <h4>
                            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                        </h4>
                    </a>
                    <a href="https://github.com/ljenchik">
                        {" "}
                        <h4>
                            <FontAwesomeIcon icon={faGithub} /> Github{" "}
                        </h4>
                    </a>
                    {/* <h4><FontAwesomeIcon icon={faPhone} /> +44 7879 547947</h4> */}
                    <h4>
                        {" "}
                        <FontAwesomeIcon icon={faLocationDot} /> London, UK
                    </h4>
                </div>
                {/* <ContactForm /> */}
            </div>
        </div>
    );
};

export default Contact;
