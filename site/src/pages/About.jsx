import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import boardFair from "../images/misc/boardfair.jpeg";
import boba from "../images/misc/academy.png";

import bloomberg from "../images/carousel/bloomberg.png";
import boeing from "../images/carousel/boeing.png";
import deloitte from "../images/carousel/deloitte.png";
import goldman from "../images/carousel/goldman.png";
import google from "../images/carousel/google.png";
import harvard from "../images/carousel/harvard.png";
import lockheed from "../images/carousel/lockheed.png";
import microsoft from "../images/carousel/microsoft.png";
import northrop from "../images/carousel/northrop.png";
import spacex from "../images/carousel/spacex.png";
import tesla from "../images/carousel/tesla.png";

import ahona from "../images/boardpics/ahona.jpeg";
import brenda from "../images/boardpics/brenda.jpeg";
import maia from "../images/boardpics/maia.jpeg";
import michelle from "../images/boardpics/michelle.jpeg";
import mike from "../images/boardpics/mike.jpeg";
import mira from "../images/boardpics/mira.jpeg";
import mina from "../images/boardpics/mina.jpeg";
import nick from "../images/boardpics/nick.jpeg";
import sam from "../images/boardpics/sam.jpeg";

import "../styles/sam/about.css";

function About() {
  return (
    <>
      <Container fluid>
        <div className="section-one">
          <Row>
            <Col className="text-col" md={6} xs={12}>
              <div className="who-text">
                <h1 className="huge">Who We Are</h1>
                <p className="who-section-one">
                  The Society of Asian Scientists and Engineers was founded in
                  2007 to help the APIDA community in STEM reach their full
                  potential. Today, SASE is a leading organization for APIDA
                  talent and leadership development in science, engineering, and
                  technology fields with more than 100 chapters in academic
                  institutions all over the country.
                </p>
                <p>
                  Our chapter's purpose aligns with these goals:{" "}
                  <strong>
                    to continually cultivate, promote, and advocate for
                    prominent Asian heritage leaders in science and engineering
                    at USC.
                  </strong>
                </p>
              </div>
            </Col>
            <Col className="image-col" md={6} xs={12}>
              <Image className="fair-image" src={boardFair} fluid />
            </Col>
          </Row>
        </div>
      </Container>

      <Container fluid>
        <div className="section-two">
          <Row>
            <Col className="what-header" md={6} xs={12}>
              <Image className="boba-img" src={boba} fluid />
            </Col>
            <Col className="what-text" md={6} xs={12}>
              <h2 className="huge">What We Do</h2>
              <p>
                We hold a wide variety of events and programs throughout the
                school year aimed at professional and cultural development.
                These include speaker events, company talks, and workshop and
                networking events as well as semester-long programming for
                leadership development.
              </p>
              <Button> Learn More </Button>
            </Col>
          </Row>
        </div>
      </Container>

      {/* <Container className="full-width-container" > */}
      <div className="section-three">
        <h1 className="white">Where our members have gone...</h1>
        <Row className="company-row">
          <Col className="company-column" xs="3" md="2">
            <Image className="company-logo" src={boeing} fluid />
          </Col>
          <Col className="company-column" xs="3" md="2">
            <Image className="company-logo" src={northrop} fluid />
          </Col>
          <Col className="company-column" xs="3" md="2">
            <Image className="company-logo" src={tesla} fluid />
          </Col>
          <Col className="company-column" xs="3" md="3">
            <Image className="company-logo" src={bloomberg} fluid />
          </Col>
        </Row>
        <Row className="company-row">
          <Col className="company-column" xs="3" md="2">
            <Image className="company-logo" src={deloitte} fluid />
          </Col>
          <Col className="company-column" xs="3" md="2">
            <Image className="company-logo" src={harvard} fluid />
          </Col>
          <Col className="company-column" xs="3" md="3">
            <Image className="company-logo" src={google} fluid />
          </Col>
          <Col className="company-column" xs="3" md="1">
            <Image className="goldman" src={goldman} fluid />
          </Col>
          <Col className="company-column" xs="3" md="2">
            <Image className="company-logo" src={spacex} fluid />
          </Col>
        </Row>
        <Row className="company-row">
          <Col className="company-column" xs="3" md="3">
            <Image className="company-logo" src={lockheed} fluid />
          </Col>
          <Col className="company-column" xs="3" md="3">
            <Image className="company-logo" src={microsoft} fluid />
          </Col>
        </Row>
      </div>
      {/* </Container> */}

      <Container fluid>
        <div className="section-four">
          <h1 className="meet-the-team">Meet the Team</h1>
          <Row className="board-row" xs="2" md="3">
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={mira} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={mira} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">Mira Pratama</Card.Title>
                  <Card.Text>President</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={michelle} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={michelle} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">Michelle Dang</Card.Title>
                  <Card.Text>Director of External Relations</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={mike} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={mike} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">Mike Gee</Card.Title>
                  <Card.Text>Director of Financial Operations</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="board-row" xs="2" md="3">
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={maia} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={maia} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">Maia Cho</Card.Title>
                  <Card.Text>Director of Programs</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={nick} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={nick} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">
                    Nick Lee-Roller
                  </Card.Title>
                  <Card.Text>Director of Marketing</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={sam} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={sam} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">Sam Cheng</Card.Title>
                  <Card.Text>Director of Design</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="board-row" xs="2" md="3">
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={ahona} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={ahona} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">Ahona Karim</Card.Title>
                  <Card.Text>Director of Operations</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={brenda} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={brenda} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">Brenda He</Card.Title>
                  <Card.Text>Associate Director of Programs</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="board-col">
              <Card className="board-card">
                {/* <Card.Img classname="board-img" variant="top" src={mina} /> */}
                <div className="board-img-container">
                  <Image className="board-img" src={mina} />
                </div>
                <Card.Body className="card-text">
                  <Card.Title className="card-title">Mina Jung</Card.Title>
                  <Card.Text>
                    Associate Director of External Operations
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default About;
