import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { FaCuttlefish } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col className=" col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <FaCuttlefish />
      </Col>

      <Col className=" col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col className=" col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <DiJavascript1 />
      </Col>
      <Col className=" col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <DiReact />
      </Col>
      <Col className=" col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <DiNodejs />
      </Col>
      <Col className=" col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <DiHtml5 />
      </Col>
      <Col className=" col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <DiCss3 />
      </Col>
      <Col className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <DiBootstrap />
      </Col>
      <Col className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <BsGithub />
      </Col>
      <Col className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <SiFirebase />
      </Col>
      <Col className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 tech-icons">
        <DiMongodb />
      </Col>
    </Row>

    // <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    //   <Col   className=" tech-icons">
    //     <CgCPlusPlus />
    //   </Col>
    //   <Col   className="tech-icons">
    //     <DiJavascript1 />
    //   </Col>
    //   <Col   className="tech-icons">
    //     <DiNodejs />
    //   </Col>
    //   <Col   className="tech-icons">
    //     <DiReact />
    //   </Col>

    //   <Col   className="tech-icons">
    //     <DiHtml5 />
    //   </Col>
    //   <Col   className="tech-icons">
    //     <DiCss3 />
    //   </Col>
    //   <Col   className="tech-icons">
    //     <DiBootstrap />
    //   </Col>
    //   <Col   className="tech-icons">
    //     <BsGithub />
    //   </Col>
    //   <Col   className="tech-icons">
    //     <SiFirebase />
    //   </Col>
    //   <Col   className="tech-icons">
    //     <DiMongodb />
    //   </Col>
    // </Row>
  );
}

export default Techstack;
