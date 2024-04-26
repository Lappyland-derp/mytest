import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'



function Header() {

return (
    <Navbar  style={{ width: "100%", marginBottom: "10vh" }} expand="lg" bg='primary' variant='dark' collapseOnSelect>
        <Container>
            
                <NavLink to="/" >
            <Navbar.Brand>PreSocial</Navbar.Brand>
                </NavLink>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            
            <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            
            
            </Nav>
            </Navbar.Collapse>
            </Container>
            <Nav className='me-auto'>
            <LinkContainer to="/Cart">
            <Nav.Link><i class="fas fa-shopping-cart"/>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Login">
            <Nav.Link><i class="fas fa-user"/>Login</Nav.Link>
            </LinkContainer>

            </Nav>
            
    </Navbar>
)
}

export default Header