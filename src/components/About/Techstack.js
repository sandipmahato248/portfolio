import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiOracle,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate
} from "react-icons/si";
import ReactToolTip from 'react-tooltip';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava data-tip="Java" />
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot data-tip="Spring Boot"/>
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringsecurity data-tip="Spring Security"/>
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 data-tip="JavaScript" />
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql data-tip="MySQL"/>
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact data-tip="React"/>
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb data-tip="MongoDB" />
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle data-tip="Oracle"/>
        <ReactToolTip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit data-tip="GIT"/>
        <ReactToolTip />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate data-tip="Hibernate"/>
      <ReactToolTip />
      </Col>
    </Row>
  );
}

export default Techstack;
