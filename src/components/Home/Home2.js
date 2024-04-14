import {React,useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import axios from "axios";
const API ="https://e6enf53ia5.execute-api.us-east-1.amazonaws.com/v1/portfolio"
//const API ="https://l9p2w9epgl.execute-api.us-east-1.amazonaws.com/v1/protfolio";

function Home2() {
  const [validated, setValidated] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [subject,setSubject] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    event.preventDefault();
    const contact = {
        "TableName": "portfolio-contact",
        "Item": {
          "name": {
            "S": name
          },
          "email": {
            "S": email
          },
          "phoneNumber": {
            "S": phoneNumber
          },
          "subject": {
            "S": subject
          },
          "message": {
            "S": message
          }
        
      }

    }
    console.log(contact);
    axios.post(API, contact)
    .then(response => {
      console.log('Response:', response);
      if(response.status === 200){
        toast.success("Successful");
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setPhoneNumber("");
      }
      
    })
  .catch(error => {
    console.error('Error:', error);
    toast.error("Error");
  });
  
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <ToastContainer />
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            With a passion for programming and a strong background in  <b className="purple">Java development</b>, 
            I have gained comprehensive experience in building end-to-end web applications and have a solid understanding of both front-end and back-end development.
            Throughout my career, I have successfully delivered various projects, utilizing my skills in Java programming, frameworks such as <b className="purple">Spring and Hibernate</b>,
            and front-end technologies such as <b className="purple">HTML, CSS, JavaScript and React JS</b>.
            I am well-versed in creating responsive and user-friendly interfaces, implementing database systems, and integrating APIs to enhance application functionality.
            Additionally, I have experience working with version control systems like <b className="purple">GIT</b> and collaborating with cross-functional teams to ensure the successful delivery of projects.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Spring Boot, Microservices, Hibernate, MySQL, React JS and Javascript. </b>
              </i>
              <br />
              <br />
              Building new <b className="purple"> Web Technologies and Products </b> is my area of interest, and whenever I can, I combine that with my passion for trying out new tools and technologies.
              <br />
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        <Col  md={12} className="home-about-social">
        <h1>CONTACT ME</h1>
        <Form noValidate validated={validated} >
        <Form.Group className="mb-3" controlId="valName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" 
        value={name} onChange={(e) => setName(e.target.value)}
        required />
        <Form.Control.Feedback type="invalid">
              Please provide name.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="valEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" 
         value={email} onChange={(e) => setEmail(e.target.value)}
        required />
        <Form.Control.Feedback type="invalid">
              Please provide email.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="valPhoneNo">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phoneNo" placeholder="Enter Phone Number" 
         value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
         pattern="^\d+$"
         minLength={10}
         maxLength={10}
       //  validate={validateNumber}
         />
           <Form.Control.Feedback type="invalid">Please enter a valid number.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="valSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter Subject" 
         value={subject} onChange={(e) => setSubject(e.target.value)}
        required />
        <Form.Control.Feedback type="invalid">
              Please provide subject.
            </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="valMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter Message"  
        value={message} onChange={(e) => setMessage(e.target.value)}
        required/>
        <Form.Control.Feedback type="invalid">
              Please provide message.
            </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sandipmahato248"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sandipmahato248/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
