import React from 'react';
import {
    Nav,
    NavItem,
    Navbar,
    NavDropdown,
    MenuItem

} from 'react-bootstrap';


const NavBar = (props) => (
   <Navbar inverse collapseOnSelect>
   <Navbar.Header>
     <Navbar.Brand className="active">
       <a >Reactive Clicky</a>
       
     </Navbar.Brand>
     {/* <Navbar.Toggle /> */}
   </Navbar.Header>
   <Navbar.Collapse>
     <Nav>
      <NavItem />
     </Nav>
     <Nav pullRight>
       <NavItem> Score:</NavItem>
       <NavItem>{props.score}</NavItem>
       <NavItem>|</NavItem>
       <NavItem>Top Score:</NavItem>
       <NavItem>{props.topscore}</NavItem>
      
     </Nav>
   </Navbar.Collapse>
 </Navbar>
);

export default NavBar;