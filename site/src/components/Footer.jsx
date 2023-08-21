import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import logo from "../images/saseBranding/saseblacklogoplustext.png";

import "../styles/sam/footer.css";

function Footer() {
  return (
    <>
      <Container fluid>
        <Row className="footer-row">
          <Col className="first-col">
            <Image className="sase-logo" src={logo} />
            <p className="address">University of Southern California, Los Angeles, CA 90089</p>
          </Col>
          <Col className="second-col">
            <Col>
              <div>
                <h6>Webpage</h6>
                <a className="link" href="#about">
                  About
                </a>
                <a className="link" href="#events">
                  Events
                </a>
                <a className="link" href="#contact">
                  Contact
                </a>
              </div>
            </Col>
            <Col>
              <div>
                <h6>Socials</h6>
                <a className="link" href="https://www.instagram.com/uscsase/?hl=en">
                  Instagram
                </a>
                <a className="link" href="#events">
                  LinkedIn
                </a>
                <a className="link" href="#contact">
                  Email
                </a>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
