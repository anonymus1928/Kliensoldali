import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

export const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
        <Form.Control type="text" placeholder="Username" value={data.username} name="username" onChange={handleChange} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" value={data.password} name="password" onChange={handleChange} />
      </FloatingLabel>

      <Button type="submit">Bejelentkezés</Button>
    </form>
  );
};
