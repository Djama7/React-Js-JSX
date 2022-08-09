import { Container , Nav, Navbar } from 'react-bootstrap';
const Navpro = () => {
    return (
        <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#A.J">A.J</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    
  );
}
export default Navpro



    
