

import React from 'react';
import { NavLink } from 'react-router-dom';  
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';  

function CustomNavbar({ cartItems }) {  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Ideal Café</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/menu">Menu</Nav.Link>
            <Nav.Link as={NavLink} to="/offers">Offers</Nav.Link>
            <Nav.Link as={NavLink} to="/locations">Locations</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
            <Nav.Link as={NavLink} to="/signin">Sign In</Nav.Link>
            <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
            <Nav.Link as={NavLink} to="/search">Search</Nav.Link>
            
            <Nav.Link as={NavLink} to="/checkout">
              Checkout
              {cartItems.length > 0 && (
                <Badge bg="success" className="ms-2">{cartItems.length}</Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;  
