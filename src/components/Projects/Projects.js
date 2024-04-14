import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Social Information Management System (SIMS)"
              description="Social Information Management system is a web-based application developed in a microservice architecture. It captures data related to Women, Children, Senior Citizens, Disabled People, Trafficking in Person, and Gender-based Violence from all the administration levels of Nepal (Ward, Local Level, District, Province, and Ministry), following the data flow from the lower administration body to the higher administration body, and consolidating it into a centralized repository. The system also collects data from several stakeholders, such as Nepal Police and Social Service agencies, analyzing data across jurisdictions. This data, in turn, provides evidence-based decisions like equal and appropriate allocation of resources, formulation of new policies, rules and laws, advocacy, and more. This system also generated a unique official ID Card for senior citizens and persons with disability."            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="
              Export-Import Code System (EXIMS) for the Department of Customs"
              description="EXIMS is a role-based web application to authorize legal importer and exporter by providing EXIM Code Certificate. EXIMS also provides validation services to ASYCUDA World System. It facilitates easy tracking of importers and exporters and encourages transparency in business transactions. The major stakeholders of this system are the Department of Customs, Company Registrar, Department of Inland Revenue, Department of Commerce, Nepal Rastra Bank, Commercial Banks, Chamber of Commerce, Consulate, and Kolkata Port."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Customs Information Monitoring System(CIMS) for Department of Customs"
              description="CIMS is a web application that comprises 6 subsystems for monitoring Customs activities of various Customs offices in Nepal. This project includes tracking and monitoring of CRMSAP(Customs Reform and Modernization Strategies and Action Plan), Field office Action Plan, Performance-Based Monitoring System, Contracts, LMBIS, Ministry of Finance Action Plan to institutionalize capacity development plans to enhance operational capacities in a sustainable manner. The system also generates reports and rankings of the offices in order of their performances and achievements."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Library Management System(LMS) for Nepal Police Academy"
              description="Web application for Nepal Police Academy to update their library work from paper-based to digital"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="
              Sangini Mobile and Web Application for Nepal CRS Company"
              description="This project comprised a Sangini app that could work offline and provides the detailed information about different products.The web application enables CRS managers to generate standard analytical reports based on the data synced to the server."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Centralized KYC System"
              description="Web application for CDSC for monitoring multiple BOIDs of users."
            />
          </Col>

          

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
