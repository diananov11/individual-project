import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Submenu from './Submenu';

function NavbarMenu() {
  const submenu = [
    { path: '/', menu: "Home" },
    { path: '/about', menu: "About" },
    { path: '/motivation', menu: "Motivation" }
  ]

  return (
    <>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="/">SheMentors <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/146/154/original/graduacion.png?1727977203" style={{ width: "2rem" }} alt="SheMentors" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '120px' }}
              navbarScroll
            >
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {submenu.map((item, index) => <Submenu item={item} key={index} />)}
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


