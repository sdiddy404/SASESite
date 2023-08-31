import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import retreat from "../images/misc/Retreat_2023.jpg";
import wrc from "../images/misc/WRC_2022.jpg";
import hike from "../images/misc/jpl.jpeg";
import academy from "../images/misc/academy.png";
import boba from "../images/misc/boba.jpeg";
import ucsd from "../images/misc/uscdwalking.png";
import mikeBrenda from "../images/misc/mikebrendaucsd.png";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import vgcFair from "../images/upcomingevents/vgcFair2023.png";
import "../styles/sam/events2.css";

function Events() {
  return (
    <>
      {/* <Container fluid> */}
      <NavBar />
      <div className="events-section blue-bg">
        <Row>
          <Col className="img-col" md={6} xs={12}>
            <Image id="wrc-img" src={wrc} fluid />
          </Col>
          <Col className="text-col" md={6} xs={12}>
            <div id="section-one-text">
              <h1 id="featured-events">
                Featured Event: SASE West Regional Conference
              </h1>
              <p id="featured-date">Spring 2024</p>
              <p className="featured-text">
                The annual SASE West Regional Conference brings together more
                than 20 active chapters from the west coast for a series of
                speaker panels, professional/development workshops, and
                networking opportunities hosted by local and national companies.
              </p>
              <p className="featured-text">
                Participants get a unique opportunity to learn more about
                different fields and career paths and connect with peers and
                industry professionals on both a small and large scale.
              </p>
              <p className="featured-text">
                For any questions, contact us via email or any of our socials
                and we'll get back to you as soon as possible.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {/* </Container> */}

      <div className="events-section">
        <Row>
          <Col className="text-col " md={6} xs={12}>
            <div id="section-two-text">
              <h2>Upcoming Events</h2>
              <p>
                Kick off the semester right and get to know more about us by
                speaking with current board members about SASE!
              </p>
            </div>
          </Col>
          <Col className="" id="upcoming-carousel-col" md={6} xs={12}>
            <Carousel data-bs-theme="dark" id="events-carousel">
              <Carousel.Item className="events-carousel-item">
                <Image class="carousel-pic" src={vgcFair} fluid />
              </Carousel.Item>
              <Carousel.Item className="events-carousel-item">
                <Image class="carousel-pic" src={vgcFair} fluid />
              </Carousel.Item>
              <Carousel.Item className="events-carousel-item">
                <Image class="carousel-pic" src={vgcFair} fluid />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>

      <div className="events-section green-bg-color">
        <div id="section-three-container">
          <h2 id="past-events-heading">Past Events</h2>
          <Carousel data-bs-theme="dark" style={{width: "90%"}}>
            <Carousel.Item>
              <Row>
                <Col><Image class="carousel-pic" src={academy} fluid /></Col>
                <Col><Image class="carousel-pic" src={hike} fluid /></Col>
                <Col><Image class="carousel-pic" src={retreat} fluid /></Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
            <Row>
                <Col><Image class="carousel-pic" src={ucsd} fluid /></Col>
                <Col><Image class="carousel-pic" src={boba} fluid /></Col>
                <Col><Image class="carousel-pic" src={mikeBrenda} fluid /></Col>
              </Row>
            </Carousel.Item>
            
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
