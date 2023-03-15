import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Hero>
        <div className="hero-container">
          <div className="my-info">
            <h1>Olena Pelagenko</h1>
            <h2>Software Developer</h2>
            <h4><a href="mailto:pelagenkolena@gmail.com">pelagenkolena@gmail.com</a></h4>
          </div>
          <img src="./images/photo.jpg" />
        </div>    
        </Hero>
      <section className="home-section-container">
        <section>Project Gallery</section>
        <section>About</section>
        <section>Contact</section>
      </section>
    </div>
  );
}

export default Home;
