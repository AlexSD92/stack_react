import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className='unstylenavlink brand' to='about'>Q&A App</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='unstylenavlink' to="about">About</NavLink>
            <NavLink className='unstylenavlink' to="questions">Questions</NavLink>
            <NavLink className='unstylenavlink' to="profiles">Profiles</NavLink>
          </Nav>
          <Nav>
            <NavLink className='unstylenavlink' to="profiles">My Profile</NavLink>
            <NavLink className='unstylenavlink' to="login">Log In</NavLink>
            <NavLink className='unstylenavlink' to="register">Register</NavLink>
            <NavLink className='unstylenavlink' to="logout">Log Out</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;