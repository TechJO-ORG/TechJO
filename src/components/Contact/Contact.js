import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xgvyjvve");

  if (state.succeeded) {
    return (
      <Container fluid className="contact-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Feel free to <strong className="purple">Contact Us</strong>
          </h1>
          <p style={{ color: "white" }}>
            Thanks for reaching out! We'll get back to you soon.
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
        <p style={{ color: "white" }}>
          Submit the form below to get in touch with us. We will respond as soon as possible.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <form onSubmit={handleSubmit}>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    style={{ 
                      marginBottom: "15px",
                      backgroundColor: "transparent",
                      color: "#ffffff",
                    }}
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    style={{                       
                      marginBottom: "15px",
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      }}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                    style={{ 
                      marginBottom: "15px",
                      backgroundColor: "transparent",
                      color: "#ffffff",
                    }}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    variant="primary"
                  >
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

export default Contact;