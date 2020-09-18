import React, { useContext } from 'react';
import './Navbar.css'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" id="nav">
            <Container fluid>
                <Link to="/">
                    <Navbar.Brand>
                        <img className='logo-style' src={logo} alt="Travel Guru" width="250px" height="100px" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Form inline>
                    <FormControl type="text" placeholder="Search Your Destination" className=" mr-sm-10 search-style" />
                </Form>
                <Nav className="mr-auto nav-style">
                    <Nav.Link href="#home">News</Nav.Link>
                    <Nav.Link href="#features">Destination</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
                    <Nav className="ml-auto">
                        {
                            user.signed ?
                            <Button onClick={() => setUser({
                                signed: false,
                                name: '',
                                email: '',
                                password: '',
                                message: ''
                            })} variant="warning" className="mx-2">Logout <br/> {user.name}</Button> :
                            <Link to="/login">
                                <Button variant="warning" className="mx-2"> <FontAwesomeIcon icon={faSignInAlt}/> Login</Button>
                            </Link>
                        }
                        </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;