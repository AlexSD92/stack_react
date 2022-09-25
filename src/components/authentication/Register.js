import '../../customcss/authentication.css'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Col, Row, Container, Alert, } from "react-bootstrap";
import { axiosReq } from '../../api/axiosDefaults';

const Register = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { username, email, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useNavigate();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(signUpData)
      await axiosReq.post("https://stack-drf-api.herokuapp.com/dj-rest-auth/registration/", signUpData);
      history("/login");
    } catch (err) {
      setErrors(err.response?.data);
      console.log(err);
    }
  };

  return (
    <div className='parentdivmargin mt-5'>
      <Row>
        <Col>
          <Container>
            <h1>Register</h1>

            <br/>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <br/>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <br/>

              <Form.Group controlId="password1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <br/>

              <Form.Group controlId="password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <br/>

              <Button type="submit">Sign up</Button>
              
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>

          <br/>

          <Container>
            <Link to="/signin">
              Already have an account? <span>Sign in</span>
            </Link>
          </Container>
        </Col>

      </Row>
    </div>

  );
};

export default Register;