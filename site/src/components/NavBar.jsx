import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import saseLogo from "../images/saseBranding/saseblacklogonotext.png";
import fbLogo from "../images/socials/fbLogo.png";
import igLogo from "../images/socials/igLogo.png";
import emailLogo from "../images/socials/email.png";
import "../styles/sam/navbar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="md" className="navbar">
        <Container fluid>
          <Nav className="page-links">
            <Nav.Link className="page-text" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="page-text" href="/events">
              Events
            </Nav.Link>
            <Nav.Link className="page-text" href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>

          <Navbar.Brand className="nav-logo">
            <Nav.Link href="/">
              <img src={saseLogo} alt="sase logo" className="nav-logo" />
            </Nav.Link>
          </Navbar.Brand>

          <Nav className="social-links">
            <Nav.Link className="socials" href="#facebook">
              <img className="socials-logo" src={fbLogo} alt="fb logo" />
            </Nav.Link>
            <Nav.Link
              className="socials"
              target="_blank"
              href="https://www.instagram.com/uscsase/?hl=en"
            >
              <img className="socials-logo" src={igLogo} alt="insta logo" />
            </Nav.Link>
            <Nav.Link className="socials" href="#home">
              <img className="socials-logo" src={emailLogo} alt="email logo" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
