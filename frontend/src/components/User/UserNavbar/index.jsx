import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { FavoritesContext } from '../../../context/FavoritesContext';

const UserNavbar = () => {
  let {favorites} = useContext(FavoritesContext)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Consulting.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/favorites" className="ms-3">
              <Button variant="outline-primary">
                <FaHeart />
                <span> ({favorites.length})</span>
              </Button>
            </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
