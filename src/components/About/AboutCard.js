import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, we are{" "}
            <span className="purple">TechJO </span>
            from <span className="purple">Jordan</span>. We are a team of passionate
            IT professionals dedicated to delivering top-notch solutions in various domains. Our expertise spans across{" "}
            <b className="purple">Web Development</b>,{" "}
            <b className="purple">E-commerce Solutions</b>,{" "}
            <b className="purple">Cloud Computing</b>,{" "}
            <b className="purple">Cybersecurity</b>,{" "}
            <b className="purple">Data Analytics</b>,{" "}
            <b className="purple">Software Development</b>, and{" "}
            <b className="purple">AI & Machine Learning</b>.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "We are committed to excellence and innovation in every project we undertake!"
          </p>
          <footer className="blockquote-footer">TechJO Team</footer>
          <p>
            Feel free to connect with us on{" "}
            <span className="purple">GitHub</span> or reach out via{" "}
            <span className="purple">email</span> for any inquiries or collaborations.
          </p>
          <ul className="about-activity">
            <li className="about-activity-item">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity-item">
              <ImPointRight /> E-commerce Solutions
            </li>
            <li className="about-activity-item">
              <ImPointRight /> Cloud Computing
            </li>
            <li className="about-activity-item">
              <ImPointRight /> Cybersecurity
            </li>
            <li className="about-activity-item">
              <ImPointRight /> Data Analytics
            </li>
            <li className="about-activity-item">
              <ImPointRight /> Software Development
            </li>
            <li className="about-activity-item">
              <ImPointRight /> AI & Machine Learning
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
