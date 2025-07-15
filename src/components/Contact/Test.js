import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import Particle from "../Particle";
import "./Style.css";

function Test() {
  const [state, handleSubmit] = useForm("xgvyjvve");

  if (state.succeeded) {
    return (
      <Container fluid className="contact-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Thank you for <strong className="purple">Contacting Us</strong>
          </h1>
          <p className="success-message">
            We appreciate your message. Our team will get back to you shortly.
          </p>
        </Container>
      </Container>
    );
  }

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Feel free to <strong className="purple">Contact Us</strong>
        </h1>
        <p className="description-white">
          Submit the form below to get in touch with us. We will respond as soon as possible.
        </p>
        <Row className="justify-content-center">
          <Col xs={11} sm={10} md={8} lg={6} className="project-card">
            <Card className="project-card-view glass-card">
              <Card.Body>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text icon-span">
                      <FaUser />
                    </span>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <ValidationError prefix="Name" field="name" errors={state.errors} />

                  <div className="input-group mb-3">
                    <span className="input-group-text icon-span">
                      <FaEnvelope />
                    </span>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address"
                    />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />

                  <div className="input-group mb-3">
                    <span className="input-group-text icon-span">
                      <FaCommentDots />
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />

                  <Button type="submit" disabled={state.submitting} variant="primary" className="w-100">
                    Submit
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Test;
