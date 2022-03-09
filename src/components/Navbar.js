import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import React from 'react'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  {/* <Container> */}
  <Navbar.Brand href="#home">Homepage</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      {/* Looks better, but forces page to refresh */}
      {/* <Nav.Link href="/">Home</Nav.Link> */}
      
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Design'>Design</NavLink>
      <NavLink to='/About'>Further Information</NavLink>
      <NavLink to="null">More is coming soon...</NavLink>
      {/* Possible Dropdown Menu */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    
  </Navbar.Collapse>
  {/* </Container> */}
</Navbar>
</div>
    )
}

export default NavbarComponent