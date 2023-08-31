import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../../images/saseBranding/sasewhitelogoplustext.png";
import Networking from "../../images/misc/networking.jpeg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero--background"></div>
      <div className="hero--foreground fade-in">
        <div className="extra-container">
          <Row>
            <Col className="hero-col" xs="10">
              <img className="hero-img" src={Logo} alt="Logo" />
              <p className="hero--text">
                We are the Society of Asian Scientists and Engineers at USC.
              </p>
            </Col>
            {/* <Col></Col> */}
          </Row>
        </div>
      </div>
    </div>
  );
}
