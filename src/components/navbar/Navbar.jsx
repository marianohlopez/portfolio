import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as ScrollLink} from 'react-scroll';

const MyNavbar = () => {

    return (
        <>
            <Navbar className='navBar sticky-top' variant="dark">
                <Container>
                    <Nav className="mx-auto">
                        <Nav.Link className='me-3' href="#home">Inicio</Nav.Link>
                        <Nav.Link className='me-3' href="#about">Acerca de mi</Nav.Link>
                        <Nav.Link className='me-3' href="#skills">Habilidades</Nav.Link>
                        <Nav.Link className='me-3' href="#proyects">Proyectos</Nav.Link>
                        <Nav.Link className='me-3' href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar