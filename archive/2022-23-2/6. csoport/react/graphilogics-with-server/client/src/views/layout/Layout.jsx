import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { AuthStatus } from "../auth/AuthStatus";

export const Layout = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>GraphiLogics</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Játék</Nav.Link>
            <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <AuthStatus />
      </Container>
    </Navbar>
    <Outlet />
  </>
);
