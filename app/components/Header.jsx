import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullLeft>
          <NavItem eventKey={1} href="#">Wiki</NavItem>
          <NavItem eventKey={2} href="#">TimeLine</NavItem>
          <NavItem eventKey={3} href="#">Roadmap</NavItem>
          <NavItem eventKey={4} href="#">BrowseSource</NavItem>
          <NavItem eventKey={5} href="#">View Tickets</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={6} href="#">Login</NavItem>
          <NavItem eventKey={7} href="#">Register</NavItem>
          <NavItem eventKey={8} href="#">Preferences</NavItem>
          <NavItem eventKey={9} href="#">Help</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
