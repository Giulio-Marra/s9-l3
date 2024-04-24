import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavBar(props) {
  return (
    <Navbar bg="light" data-bs-theme="light" fixed="top">
      <Container>
        <Navbar.Brand href="#">Book Library</Navbar.Brand>
        <Nav>
          <Nav.Link href="#">{props.firstText}</Nav.Link>
          <Nav.Link href="#">{props.secondText}</Nav.Link>
          <Nav.Link href="#">{props.thirdtText}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
