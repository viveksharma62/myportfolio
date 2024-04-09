import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotstar_clone from "../../Assets/Projects/hotstar_clone.png";
import text_util from "../../Assets/Projects/text_util.png";
import calculator  from "../../Assets/Projects/calculator.png"
import ecom from '../../Assets/Projects/ecom-site.png'
import gmail from '../../Assets/Projects/gmail-clone.png'
import bank_m_s from '../../Assets/Projects/bank_m_s.png'

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
              imgPath={hotstar_clone}
              isBlog={false}
              title="Hotstar-Clone"
              description="The Hotstar Clone project aims to replicate the features and functionalities of the popular streaming platform, Hotstar. The clone will provide users with a."
              ghLink="https://github.com/viveksharma62/hotstarClone_Project"
              demoLink="https://viveksharma62.github.io/hotstarClone_Project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text_util}
              isBlog={false}
              title="Text_Utils_project"
              description="Text_Utils_Project is a software project aimed at providing various utilities for manipulating and processing text data. It offers a range of functionalities to analyze, modify, and extract information from textual content efficiently.."
              ghLink="https://github.com/viveksharma62/Text_Utils_project"
              demoLink="https://text-utils-project-green.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Editor.io"
              description="The Scientific Calculator Project is a software application designed to provide advanced mathematical functions and calculations beyond basic arithmetic operations. It aims to offer a user-friendly interface for performing complex mathematical computations typically used in scientific, engineering, and academic fields."
              ghLink="https://github.com/viveksharma62/calculator"
              demoLink="https://viveksharma62.github.io/calculator/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="e-commerce"
              description="The E-commerce Project is a comprehensive online platform designed to facilitate the buying and selling of goods or services over the internet. It serves as a virtual marketplace where businesses and consumers can interact, browse products, make purchases, and manage transactions securely and conveniently."

              ghLink="https://github.com/viveksharma62/ecommerce-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="Gmail-clone"
              description="The Gmail-Clone project aims to replicate the functionality and user experience of the popular email service Gmail. This web-based application will allow users to send, receive, organize, and manage their emails efficiently. It will include features such as composing emails, inbox management, labels, filters, search functionality, and a user-friendly interface."
              ghLink="https://github.com/viveksharma62/GmailClone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank_m_s}
              isBlog={false}
              title="Banking management system"
              description="The Banking Management System project is designed to streamline the operations of a bank by automating various processes involved in managing customer accounts, transactions, loans, and other banking services. This comprehensive system provides both customers and bank staff with an efficient platform for handling financial activities securely."
              ghLink="https://github.com/viveksharma62/Banking_management_system"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
