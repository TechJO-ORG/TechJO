import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome to <span className="purple">TechJO</span>, a dynamic startup
            based in <span className="purple">Jordan</span>. We are a team of
            passionate IT professionals dedicated to delivering innovative,
            high-quality solutions across a wide range of domains, including{" "}
            <b className="purple">Web Development</b>,{" "}
            <b className="purple">E-commerce Solutions</b>,{" "}
            <b className="purple">Cloud Computing</b>,{" "}
            <b className="purple">Cybersecurity</b>,{" "}
            <b className="purple">Data Analytics</b>,{" "}
            <b className="purple">Software Development</b>, and{" "}
            <b className="purple">AI & Machine Learning</b>.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Empowering businesses and individuals with cutting-edge technology
            solutions tailored to their needs."
          </p>
          <footer className="blockquote-footer">The TechJO Team</footer>
          <p>
            Connect with us on{" "}
            <a
              href="https://github.com/MQA-Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="purple"
            >
              GitHub
            </a>{" "}
            or reach out via our{" "}
            <Link to="/contact" className="purple">
              contact page
            </Link>{" "}
            for inquiries, collaborations, or to explore how we can bring your ideas to life!
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
