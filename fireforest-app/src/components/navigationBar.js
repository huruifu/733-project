import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavigationBar() {
  

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/fire-size">Fire Size</Nav.Link>
          <Nav.Link href="/forestfire-heatmap">Forestfire Heatmap</Nav.Link>
          <Nav.Link href="/forestfire-reason">Forestfire Reason</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
