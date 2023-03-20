import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faSmileWink } from "@fortawesome/free-solid-svg-icons";


function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Hi, I am Olena! Nice to meet you!</h1>
      <h2 className="about-subtitle">Who am I?</h2>
          <p>
            I am a software developer, a frontend web developer, an experienced maths teacher and a mother of
            two boys{" "}
          </p>
          <p>
            {" "}
            During the pandemic and while on childcare leave, I decided to try
            something different in terms of my career. I started with basic
            online Python courses on Coursera which I found interesting and
            motivating. I felt a sense of satisfaction and fulfilment from
            completing challenging coding tasks, and so I decided to continue
            learning to programme and make it my future profession.
          </p>
          <p>
            I went on to complete the EPAM Python Online UA course, the
            TechSwitch Retraining Program and the Trilogy Skills Bootcamp in
            Front-End Web Development.
          </p>
          <p>
            I love learning and want to continue to grasp new skills and ideas.
            I want to help other people through developing software, and I would
            like to have a creative, challenging, and flexible job which offers
            career development. I am full of enthusiasm and ready for the new
            challenges.
          </p>
      <h2 className="about-subtitle"> What am I good at?</h2>
      <p>
        # JavaScript, TypeScript, React, Python, Knex, Postgres, GitHub, jQuery,
        HTML, CSS, Bootstrap, SQL, Rest Apis
      </p>
      <p># Hardworking and self disciplined lifelong learner</p>
      <p> # Excellent analytical and problem solving skills</p>
      <p># Languages: English, Ukrainian, Russian</p>
      <h2 className="about-subtitle">What do I like?</h2>
      <p>Reading, cooking, walking, nature, art</p>
      <h2 className="about-subtitle">What makes me happy?</h2>
      <p>
        My family, random kindness, working code <FontAwesomeIcon icon={faSmileWink} />, good books, movies and
        conversations, jazz, huge empty spaces
      </p>
    </div>
  );
}

export default About;
