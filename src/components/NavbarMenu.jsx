import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavbarMenu() {

  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">SheMentors<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/154/original/graduacion.png?1727977203" style={{ width: "2rem" }} alt="SheMentors" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '120px' }}
              navbarScroll
            >
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-2">
                    <NavLink to='/' className="text-decoration-none text-body-secondary" >Home</NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink to='/about' className="text-decoration-none text-body-secondary" >About</NavLink>
                  </li>
                  <li className="nav-item mx-2">
                    <NavLink to='/motivation' className="text-decoration-none text-body-secondary" >Motivation</NavLink>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}


export default NavbarMenu;


