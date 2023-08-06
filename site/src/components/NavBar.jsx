import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import saseLogo from '../images/saseBranding/saseblacklogonotext.png';
import '../styles/sam/NavBar.css';

function Header () {
    return (
        <>
          <Navbar bg="light" expand="md" className="navbar">
            <Container fluid>
              <Nav className="page-links">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
              </Nav>

              <Navbar.Brand  className="nav-logo">
                <img src={saseLogo} alt="sase logo" className="nav-logo"/>
              </Navbar.Brand>

              <Nav className="social-links">
                <Nav.Link href="#facebook">Facebook</Nav.Link>
                <Nav.Link href="#twitter">Twitter</Nav.Link>
                <Nav.Link href="#instagram">Instagram</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <p>hi</p>
        </>
      );
}

export default Header;