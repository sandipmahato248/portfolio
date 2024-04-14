import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandip Mahato </span>
            from <span className="purple"> Jhapa, Nepal.</span>
            <br />Experienced full-stack developer with about 4 years of leadership and participation in the development of business web and mobile applications in hurried Agile Scrum environments.
            <span className="purple"> Java, Spring Boot, Microservices, ReactJS, Spring Cloud, Oracle, MySQL, PostgreSQL, Spring Data, Spring Security, and JPA </span> practical knowledge.
              Exceptionally personable with a gift for managing, coaching, and leading top-tier technical teams.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
             <li className="about-activity">
              <ImPointRight /> Reading Books
            </li> 
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
