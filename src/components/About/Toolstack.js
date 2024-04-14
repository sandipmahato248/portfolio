import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiIntellijidea
} from "react-icons/si";
import {
  DiEclipse,
  DiStackoverflow
} from "react-icons/di";
import ReactToolTip from 'react-tooltip';



function Toolstack() {
 
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea data-tip="Intellij" />
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode  data-tip="Visual Studio Code"/>
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman  data-tip="Postman"/>
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse data-tip="Eclipse"/>
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiStackoverflow data-tip="Stack Overflow" />
        <ReactToolTip />
      </Col>
    
    </Row>
  );
}

export default Toolstack;
