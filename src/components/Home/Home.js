import React from "react";
import { Container } from "react-bootstrap";
import Intro from "./Intro";
import "./Home.css";
import Buttons from "../Buttons/Buttons";

function Home() {
  return (
    <section>
      <div className="home-section" id="home">
        <Container className="home-content">
          <div className="home-header">
            <p className="heading">Hi There! I am</p>
            <h1 className="heading-name">Shaminur Rahaman</h1>
            <h3 className="heading-content">Full Stack Developer</h3>
            <ul>
              <li className="first-li">Web Developer</li>
              <li>Competative Programmer</li>
            </ul>
          </div>
          <Buttons />
        </Container>
      </div>
      <Intro />
    </section>
  );
}

export default Home;
