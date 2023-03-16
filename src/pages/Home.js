import React from "react";
import Hero from "../components/Hero";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Hero backgroundImage={"./images/purple-bricks.png"}>
        <div className="hero-container">
          <div className="my-info">
            <h1>Olena Pelagenko</h1>
            <h2>Software Developer</h2>
            <h4>Based in London, UK</h4>
            <h4>
              <a href="mailto:pelagenkolena@gmail.com">
                pelagenkolena@gmail.com
              </a>
            </h4>
            <div className="additional-links">
              <h4>
                <a href="/contact">Contact me</a>
              </h4>
              <h4>
                <a href="https://drive.google.com/file/d/1FcUEvwxfNU7hRDbPRi64ZR4loT4jZzNV/view?usp=sharing">
                  Download my CV
                </a>
              </h4>
            </div>
          </div>
          <img src="./images/photo.png" />
        </div>
      </Hero>

      <Hero backgroundImage={"./images/white-bricks.png"}>
        <div className="hero-container">
        <img src="./images/family.png" />
          <div className="who-am-i">
            <div className="who-am-i-info">
              <h1>Hi, I am Olena!</h1>
              <h1>Nice to meet you!</h1>
              <h2>
                <p>I am an experienced maths teacher,</p>
                <p> a career switcher and </p>
                <p>a mother of two boys</p>
              </h2>
              <a href="/about">
                <h2>
                  <span className="nowrap">More about me</span>
                </h2>
              </a>
            </div>
          </div>
        </div>
      </Hero>

      <Hero backgroundImage={"./images/purple-bricks.png"}>
        <div className="hero-container">
          <div className="skills">
            <div className="skills-info">
              <h1>I am good at</h1>
              <ul>
                <li>JavaScript, TypeScript, React</li>
                <li>HTML, CSS, Bootstrap</li>
                <li>jQuery, Rest Api</li>
                <li>Postgres, Knex, SQL</li>
                <li>Python</li>
                <li>GitHub</li>
              </ul>
              <a href="/projects">
                <h4>
                  <span className="nowrap">Have a look at my projects</span>
                </h4>
              </a>
            </div>
          </div>
          <img src="./images/work.png" />
        </div>
      </Hero>
    </div>
  );
}

export default Home;

// Your Career is a Layer of Bricks
