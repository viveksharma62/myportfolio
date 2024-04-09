import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek kumar </span>
            from <span className="purple"> Gopalganj Bihar.</span>
            <br />
            I'm currently doing B.Tech Computer Engineering  From Marwadi University Rajkot Gujarat
            <br />
            I am currently in my 4<sup>th</sup> Semester .
            <br />
              I am interested in becoming a successfull full stack web developer
              <br/>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> PhotoGraphy
            </li>
            <li className="about-activity">
              <ImPointRight /> learning the technology and new skill
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">VivekSharma62</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
