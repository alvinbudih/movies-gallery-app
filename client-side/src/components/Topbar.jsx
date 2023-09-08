import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <Navbar sticky='top' bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>
            <Link to="/" className='nav-link'>
              Home
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}