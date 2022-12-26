import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom'
import Button from '@mui/material/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.scss"

function ColorSchemesExample() {
    return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg"  fixed="top">
            <Container>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <NavLink to="/" className="text-decoration-none color-primary">
                            Home
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="about" className="text-decoration-none color-primary">
                            About
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="mywork" className="text-decoration-none color-primary">
                            My Work
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="skills" className="text-decoration-none color-primary">
                            Skills
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink to="contact" className="text-decoration-none color-primary">
                            Contact
                        </NavLink>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}

export default ColorSchemesExample;


/*
<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>


<Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link>
                    <NavLink to="react">
                        Home
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="about">
                        About
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="skills">
                        Skills
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="contact">
                        Contact
                    </NavLink>
                </Nav.Link>
                <Button variant="contained">Hello World</Button>
            </Nav>
            </Container>
        </Navbar>

*/