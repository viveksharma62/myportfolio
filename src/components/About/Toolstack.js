import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { TbBrandNetbeans } from "react-icons/tb";
import { BiCodeBlock } from "react-icons/bi";
import { FaUbuntu } from "react-icons/fa";




function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNetbeans  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiCodeBlock />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaUbuntu />
      </Col>
    </Row>
  );
}

export default Toolstack;
