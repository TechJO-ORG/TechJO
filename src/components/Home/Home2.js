import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who's <span className="purple"> TechJO </span> Team?
            </h1>
            <p className="home-about-body">
              A team of passionate IT professionals dedicated to
              delivering top-notch solutions in various domains. Our expertise
              spans across <b className="purple">Web Development</b>,{" "}
              <b className="purple">E-commerce Solutions</b>,{" "}
              <b className="purple">Cloud Computing</b>,{" "}
              <b className="purple">Artificial Intelligence & Machine Learning</b>,{" "}
              <b className="purple">Software Development</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON GITHUB</h1>
            <p>
               Feel free to <span className="purple">contact </span> us on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TechJO-ORG/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
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
