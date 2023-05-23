/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useLoginMutation } from "../../state/graphilogicsApiSlice";
import { useDispatch } from "react-redux";
import { login } from "../../state/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [authLogin] = useLoginMutation();
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = data;
    const newErrors = {};

    if (username === "") {
      newErrors.username = "Username is required!";
    }

    if (password === "") {
      newErrors.password = "Password is required!";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).length > 0) {
      return;
    }

    try {
      const result = await authLogin({
        strategy: "local",
        email: username,
        password,
      }).unwrap();
      dispatch(login({user: result.user, token: result.accessToken}));
      navigate('/', {replace: true});
    } catch (error) {
      newErrors.username = "Login error";
      setErrors(newErrors);
    }
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
          name="username"
          value={data.username}
          onChange={handleChange}
          isInvalid={!!errors.username}
        />
        <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
      </FloatingLabel>
      <Button type="submit" className="mt-3">
        Bejelentkezés
      </Button>
    </form>
  );
};
