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
            <h4>London, UK</h4>
            <h4>
              <a href="mailto:pelagenkolena@gmail.com">
                pelagenkolena@gmail.com
              </a>
            </h4>
          </div>
          <img src="./images/photo.png" />
        </div>
      </Hero>

      <Hero backgroundImage={"./images/white-bricks.png"}>
        <div className="hero-container">
          <div className="who-am-i">
            <img src="./images/family.png" />
            <div className="who-am-i-info">
              <h1>Hi, I am Olena! Nice to meet you!</h1>
              <h2> 
                I am an experienced maths teacher, a career switcher and a
                mother of two boys
              </h2>
              <a href="/about"><h2> 
                <span className="nowrap">More about me</span>
              </h2></a>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
}

export default Home;



// Your Career is a Layer of Bricks