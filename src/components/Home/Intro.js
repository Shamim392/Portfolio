import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <h1 className="introHeading" style={{ fontSize: "2.6em" }}>
            LET ME INTRODUCE <span className="introSpan">MYSELF</span>
          </h1>
          <Col md={6} className="home-about-description">
            <p className="home-about-body">
              Hello! I'm Shaminur Rahaman Shamim. I'm a front end web developer
              based in Dhaka,Bangladesh. During the day I work as a Front end
              developer kajkam initiative ltd. and in the evening I work on
              freelance projects and utilize the time to built my own products.
              I spent my leisure hours reading books. Right now I'm also trying
              a hand at Javascript and React JS. I love to learn and explore new
              areas.
            </p>
          </Col>
          <Col md={6} className="myAvtar">
            <div>
              <img
                src={myImg}
                className="img-fluid profileImage"
                alt="avatar"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="introSpan">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shamim392"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/shamim392"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shaminur-rahaman-shamim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shaminur_125"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
