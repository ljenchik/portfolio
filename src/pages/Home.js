import React from "react";
import Hero from "../components/Hero";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <Hero backgroundImage={"./images/white-bricks.png"}>
                <div className="hero-container">
                    <div className="my-info">
                        <h1>Olena Pelagenko</h1>
                        <h2>Software Developer</h2>
                        <h5>Based in London, UK</h5>
                        <h5>
                            <a href="mailto:pelagenkolena@gmail.com">
                                pelagenkolena@gmail.com
                            </a>
                        </h5>
                        {/* <div className="additional-links"> */}
                        {/* <h5>
                <a href="/contact">Contact me</a>
              </h5> */}
                        {/* <h5>
                <a href="https://drive.google.com/file/d/1FcUEvwxfNU7hRDbPRi64ZR4loT4jZzNV/view?usp=sharing">
                  Download my CV
                </a>
              </h5> */}
                        {/* </div> */}
                    </div>
                    <img src={"./images/photo.png"} id="my-info-image" />
                </div>
            </Hero>

            <Hero backgroundImage={"./images/purple-bricks.png"}>
                <div className="hero-container">
                    {/* <img src={"./images/family.png"} /> */}
                    <div className="who-am-i-info">
                        <h2>Hi, I am Olena!</h2>
                        <h3>Nice to meet you!</h3>
                        <h5>
                            I am a software developer, frontend web developer,
                            experienced maths teacher and a mother of two boys
                        </h5>
                        <a href="/about">
                            {/* <h5>
                  <span className="nowrap">More about me</span>
                </h5> */}
                        </a>
                    </div>
                </div>
            </Hero>

            <Hero backgroundImage={"./images/white-bricks.png"}>
                <div className="hero-container">
                    <div className="skills">
                        <div className="skills-info">
                            <a href="/projects">
                                <h2>
                                    <span className="nowrap">
                                        Have a look at my projects
                                    </span>
                                </h2>
                            </a>
                            <p>
                                <h5># JavaScript, TypeScript, React</h5>
                            </p>
                            <p>
                                <h5># HTML, CSS, Bootstrap</h5>
                            </p>
                            <p>
                                <h5># jQuery, Rest Api</h5>
                            </p>
                            <p>
                                <h5># Postgres, Knex, SQL</h5>
                            </p>
                            <p>
                                <h5># Python, GitHub </h5>
                            </p>
                        </div>
                    </div>
                    <img src={"./images/work.png"} id="laptop" />
                </div>
            </Hero>
        </div>
    );
}

export default Home;
