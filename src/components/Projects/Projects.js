import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import four from "../../Assets/Projects/four.PNG";
import three from "../../Assets/Projects/three.jpg";
import five from "../../Assets/Projects/five.PNG";
import one from "../../Assets/Projects/one.png";
import two from "../../Assets/Projects/two.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="introSpan">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={one}
              isBlog={false}
              title="Ecommerce"
              description="This is a ecommerce website.In this website anyone can order products,create account,login"
              ghLink="https://github.com/Shamim392/E-commerce-Management-System-Frontend-Backend"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={two}
              isBlog={false}
              title="Ecommerce"
              description="This is a ecommerce website.In this website anyone can order products,create account,login"
              ghLink="https://github.com/Shamim392/batabd-website-client-site"
              demoLink="https://batabd-website.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={three}
              isBlog={false}
              title="Travel-Tour"
              description="This project is a Tour management system website."
              ghLink="https://github.com/Shamim392/travel-tour-client-site"
              demoLink="https://travel-tour-website-f63c6.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={four}
              isBlog={false}
              title="Bike-Shop"
              description="This project is an frontend website build with html and CSS"
              ghLink="https://github.com/Shamim392/honda-cbr-bootstrap"
              demoLink="https://shamim392.github.io/honda-cbr-bootstrap/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={five}
              isBlog={false}
              title="Weather App"
              description=" Weather forecast systems and applications predict weather conditions based on multiple parameters. "
              ghLink="https://shamim392.github.io/temperature-api-practice/"
              demoLink="https://github.com/Shamim392/temperature-api-practice"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
