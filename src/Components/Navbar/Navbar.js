import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Navbar.styles.css"

function NavBar() {

  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/HomePage">Clothes Store</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/HomePage">Home</Nav.Link>
      <Nav.Link href="/Men">Men</Nav.Link>
      <Nav.Link href="/Women">Women</Nav.Link>
    </Nav>
  
  </Navbar>
         
    )
}
export default NavBar ;