import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" variant="light" className="airport-navbar d-flex">
      <Navbar.Brand href="#home"><img src={logo} alt="navbar-logo" className="img-fluid navbar-logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navbar-link">OUR AIRPORTS</Nav.Link>
          <Nav.Link className="navbar-link">DESTINATIONS</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
