import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BtnComponent from '../button/BtnComponent';
import "./NavbarComponent.css";
import movieLogo from '../../assets/movie.png';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className='logo'>
          <img src={movieLogo} alt='movie-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white' }} />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-custom-collapse'>
          <Nav className="ms-auto justify-content-end ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Link to="/login"><BtnComponent variant={"light"} text={"Login"} /></Link>
            <Link to="/signup"><BtnComponent variant={"secondary"} text={"Sign up"} /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;