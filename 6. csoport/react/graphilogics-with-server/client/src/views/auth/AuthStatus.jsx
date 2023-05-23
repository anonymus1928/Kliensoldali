import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser, logout } from "../../state/authSlice";

export const AuthStatus = () => {
  const user = useSelector(getLoggedInUser);
  const dispatch = useDispatch();

  if (!user) {
    return 'You need to login!';
  }

  return (
    <>
      <Nav.Item>Hello {user.email}!</Nav.Item>
      <Button onClick={() => dispatch(logout())} className="ms-3" variant="outline-secondary">Logout</Button>
    </>
  );
};
