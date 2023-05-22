/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

export const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
      });
      const [errors, setErrors] = useState({});
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        // TODO
      };
    
      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
        <Form.Control
            type="text"
            placeholder="username"
            value={data.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">
            {errors.username}
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
            {errors.password}
        </Form.Control.Feedback>
      </FloatingLabel>
      <Button type="submit" className="mt-3">
        Bejelentkezés
      </Button>
    </form>
  );
};
