import '../customcss/navbar.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import '../api/axiosDefaults';

function NavBar() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser(); 
  const history = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
      console.log('You have logged out');
      history('login')
    } catch (err) {
      console.log(err);
    }
  };

  const logInLinks1 = (
    <>
      <NavLink className='unstylenavlink' to="questions">Questions</NavLink>
      <NavLink className='unstylenavlink' to="profiles">Profiles</NavLink>
    </>
  );

  const logInLinks2 = (
    <>
      <NavLink className='unstylenavlink' to="myprofile">{currentUser?.username}</NavLink>
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
        <NavLink className='unstylenavlink brand' to=''>Q&A App</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='unstylenavlink' to="">About</NavLink>

            {currentUser ? logInLinks1 : logOutLinks}

          </Nav>

          <Nav className="mr-auto">

            {currentUser ? logInLinks2 : null}

          </Nav>          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;