import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const navItem = (menuItem, keyitem) => {
  if (menuItem.details) {
    const path = menuItem.id;
    return (
      <NavDropdown title={menuItem.name}>
        {menuItem.details.map((subItem, keyitem2) => (
          <NavDropdown.Item
            key={keyitem + keyitem2}
            href={"/?menu=" + path + "/" + subItem.id}
          >
            {subItem.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  } else {
    return (
      <Nav.Link key={keyitem} href={"/?menu=" + menuItem.id}>
        {menuItem.name}
      </Nav.Link>
    );
  }
};

const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);

class MenuList extends Component {
  render() {
    const { menuItems } = this.props;
    return (
      <nav className="topnavigation">
        <Navbar bg="light" expand="lg" onSelect={handleSelect}>
          <Navbar.Brand href="/">Étlap</Navbar.Brand>
          <Nav className="mr-auto">
            {menuItems.map((menuItem, keyitem) => navItem(menuItem, keyitem))}
          </Nav>
          <Navbar.Brand className="addmenu-item" href="/?item=addmenu">
            Új menü
          </Navbar.Brand>
        </Navbar>
      </nav>
    );
  }
}

export default MenuList;
