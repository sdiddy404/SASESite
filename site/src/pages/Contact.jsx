import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../styles/sam/contact.css";

function Contact() {
  return (
    <>
      <Container fluid>
        <div className="contact-container">
          <Row>
            <Col className="bg-color">
              <div className="margin-div">
                <h1>Get in touch</h1>
                <p className="contact-text">
                  Any general membership, sponsorships, leadership
                  opportunities, or any other organizational matters? Use this
                  form to send us a message, and we will get back to you as soon
                  as possible!
                </p>
                <p className="contact-text">
                  Feel free to also contact us via email and social media as
                  they are monitored regularly for messages and inquiries.
                </p>

                <h4>Sponsorship Information</h4>
                <p className="contact-text">
                  For more detailed information about how you can sponsor us,
                  see the{" "}
                  <a href="https://issuu.com/saseusc/docs/2023-2024_sponsorship_prospectus">
                    USC SASE Sponsorship Package.
                  </a>
                </p>
              </div>
            </Col>
            <Col>
              <div className="no-margin-div">
                <Form>
                  <Form.Group className="form-group" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your name"
                    />
                  </Form.Group>

                  <Form.Group className="form-group" controlId="company">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your company name"
                    />
                  </Form.Group>

                  <Form.Group className="form-group" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group className="form-group" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={4}
                      placeholder="Enter your message"
                    />
                  </Form.Group>

                  <Button className="submit-btn" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Contact;
