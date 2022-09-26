import React from "react";
import { Container } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="skill-section">
      <section>
        <h1 className="skill-heading">
          Professional <strong className="introSpan">Skills </strong>
        </h1>
        <Techstack />
      </section>
      <section>
        <h1 className="skill-heading pt-5">
          <strong className="introSpan">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </section>
    </Container>
  );
}

export default Skills;
