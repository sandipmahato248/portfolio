import React, { useState, useEffect } from "react";
import { Container, Row,Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import ProjectCard from "../Projects/ProjectCards";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf_eventBridge from "../../Assets/../Assets/Projects/sandip_eventBridge.pdf";
import eventBridge from "../../Assets/../Assets/Projects/eventBridge.png";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Blog() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="project-section">
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <Row style={{ justifyContent: "center", position: "relative" }}>
           <a href={pdf_eventBridge} download>View Full Blog</a>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
          <Card className="quote-card-view">
          <Card.Body>
          <p style={{ textAlign: "justify", height:500 }}>
          <h3 className="project-heading">
          <strong className="purple"> Event Bridge  </strong>
          </h3>
            We all have been familiar with AWS services like <span className="purple">SQS, SNS </span>. Now, let’s dive into the event bridge. <span className="purple">Amazon event bridge </span> was launched to make it easy for us to develop, and build powerful, event-driven architecture at any scale.
          <br />
           <span className="purple">Event bridge </span> is a serverless event that lets you receive, filter, transform, route, and deliver events. It gets events from sources like AWS Services and third-party SAAS applications such as Shopify, PageDuty, and DataDog.
            <br />
            <img src={eventBridge} alt="Image" style={{height:200}} />
            <br />
            <span className="purple">
            <a href={pdf_eventBridge} download> Click here to view full blog.</a>
             </span>
          </p>
        <br />
        
          </Card.Body>
          </Card >
          </Col>
          </Row>
          </Container>
    </div>
  );
}

export default Blog;
