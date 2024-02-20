/* eslint-disable no-unused-vars */
import { useState } from "react";
import Login from "./Login";
import Private from "./Private";
import { useAuth } from "./authContext";

function App() {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  // const login = (username) => setLoggedInUser(username);
  // const logout = () => setLoggedInUser(null);

  const {loggedInUser, login, logout} = useAuth();

  return <div>{loggedInUser ? <Private logout={logout} loggedInUser={loggedInUser} /> : <Login login={login} />}</div>;
}

export default App;
