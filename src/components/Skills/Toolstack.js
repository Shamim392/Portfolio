import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <SiLinux />
      </Col>
      <Col className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <SiPostman />
      </Col>
      <Col className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
