import { Button, Nav } from "react-bootstrap";

export const AuthStatus = () => {
  return (
    <>
      <Nav.Item>Hello &lt;user&gt;!</Nav.Item>
      <Button className="ms-3" variant="outline-secondary">Logout</Button>
    </>
  );
};
