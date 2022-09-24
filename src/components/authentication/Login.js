import '../../customcss/authentication.css'
import React, { useState } from "react";
import { Form, Alert, Button, Col, Row, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from "../../api/axiosDefaults";


function Login() {
  const setCurrentUser = useSetCurrentUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axiosReq.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history('/questions');
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='parentdivmargin mt-5'>
      <Row>
        <Col>
          <Container>
            <h1>Get Logged In</h1>

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
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <br/>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <br/>

              <Button type="submit">Sign in</Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <br/>
          <Container>
            <Link to="/register">
              Don't have an account? <span>Sign up now!</span>
            </Link>
          </Container>
        </Col>
      </Row>
    </div>

  );
}

export default Login;