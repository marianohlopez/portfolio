import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {

    const [font, setFont] = useState(false)

    const darkFont = () => font === false? setFont('fontHamburguer') : setFont(false);

    return (
        <>
            <Navbar onToggle={darkFont} className='navBar sticky-top' variant="dark" expand="lg">
                <Container className={font}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto btnNavBar">
                            <Nav.Link className='me-3' href="#home">Inicio</Nav.Link>
                            <Nav.Link className='me-3' href="#about">Acerca de mi</Nav.Link>
                            <Nav.Link className='me-3' href="#skills">Habilidades</Nav.Link>
                            <Nav.Link className='me-3' href="#projects">Proyectos</Nav.Link>
                            <Nav.Link className='me-3' href="#contact">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar