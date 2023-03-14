import { useState } from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="./images/my-mars-mission.png" className="card-image" />
          </div>
          <div className="flip-card-back">
            <h1>My Mars Mission</h1>
            <p>
              A website for teenagers about Mars, which displays images of Mars
              from the NASA API. It has a multiple answer quiz, and creates and
              updates the user’s account, which stores and creates tickets to
              Mars
            </p>
            <p>Technologies used </p>
            <p>
              JavaScript, React, Node.js, PostgreSQL, CSS, SQL, Bcrypt, Rest
              Api, Font Awesome
            </p>
            <p>
              <i class="fa-brands fa-github"></i>{" "}
              <a href="https://github.com/ljenchik/my-mars-mission">
                https://github.com/ljenchik/my-mars-mission
              </a>
            </p>
            <p>
              Site is live at{" "}
              <a href="https://ljenchik.github.io/my-mars-mission/">
                https://ljenchik.github.io/my-mars-mission/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
