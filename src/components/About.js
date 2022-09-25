import React from 'react'
import { Col, Row } from 'react-bootstrap';

function About() {
  return (
    <div className='parentdivmargin mt-5 left'>
    <h1>About this application</h1> 
      <Row>
        <Col md={6}>
          <p>This application is largely broken up into 3 sections:</p>
            <ol>
              <li>
                Questions
              </li>
              <li>
                Answers
              </li>
              <li>
                Profiles
              </li>
            </ol>
          <p>Anyone can register for an account. In order to do so, they just need to click on 'Register' 
            within the NavBar and fill the registration form out.</p>
          <p>Once a user is registered, they can sign in to their account and make full use of the application. 
            In order to log in to their account, they need to click on 'Log In' within the Navbar and fill the login form out.</p>
          <p>Once a user is done with their session, they can choose to log out of the account. In order to 
            log out of their account, users must click on 'Log Out' which appears on the top right of the NavBar 
            once a user has logged in.</p>
          <p>Questions:</p>
          <ul>
            <li>
              If a user is <strong>NOT LOGGED IN</strong>, they will be able to view question list and detail views. 
            </li>
            <li>
              If a user is <strong>LOGGED IN</strong>, they will be able to do everything a logged out user can do, and also post new questions, edit their own questions and delete their own questions.
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <p>Answers:</p>
          <ul>
            <li>
              If a user is <strong>NOT LOGGED IN</strong>, they will be able to view answer list and detail views. 
            </li>
            <li>
              If a user is <strong>LOGGED IN</strong>, they will be able to do everything a logged out user can do, and also post new answers, edit their own answers and delete their own answers.
            </li>
          </ul>
          <p>Profiles:</p>
          <ul>
            <li>
              If a user is <strong>NOT LOGGED IN</strong>, they will be able to view profile list and detail views. 
            </li>
            <li>
              If a user is <strong>LOGGED IN</strong>, they will be able to do everything a logged out user can do and also edit their profile to include a name and bio.
            </li>
          </ul>
          <p>Please use responsibly,</p>
          <h1 className='signature'>Alex D</h1>
        </Col>
      </Row>
    </div>

  )
}

export default About;