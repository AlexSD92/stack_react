import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext"
import '../api/axiosDefaults';

function NavBar() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser(); 

  const handleLogOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
      console.log('You have logged out');
    } catch (err) {
      console.log(err);
    }
  };

  const logInLinks = (
    <>
      <NavLink className='unstylenavlink' to="questions">Questions</NavLink>
      <NavLink className='unstylenavlink' to="profiles">Profiles</NavLink>
      <NavLink className='unstylenavlink' to="profiles">My Profile</NavLink>
      <NavLink className='unstylenavlink' to="newquestion">New Question</NavLink>
      <NavLink className='unstylenavlink' onClick={handleLogOut} to="questions">Log Out</NavLink>
    </>
  );

  const logOutLinks = (
    <>
      <NavLink className='unstylenavlink' to="login">Log In</NavLink>
      <NavLink className='unstylenavlink' to="register">Register</NavLink>
    </>
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className='unstylenavlink brand' to='about'>Q&A App</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='unstylenavlink' to="about">About</NavLink>

            {currentUser ? logInLinks : logOutLinks}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;