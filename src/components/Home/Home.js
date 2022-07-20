import React from "react";
import { Container } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import "./Home.css";
import Button from "../Button/Button";

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
          <Button />
          <div className="action"></div>
        </Container>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
