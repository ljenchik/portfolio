import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import "./Home.css";

function Home() {
  return (
    <div>
      <Hero backgroundImage="./hero.png">
        <h1>Olena Pelagenko</h1>
        <h2>Software Developer</h2>
      </Hero>
      <div className="home-container">
        <section>Project Gallery</section>
        <section>About</section>
        <section>Contact</section>
      </div>
    </div>
  );
}

export default Home;
