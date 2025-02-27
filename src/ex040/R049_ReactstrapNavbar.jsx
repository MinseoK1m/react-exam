import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

class R049_ReactstrapNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: false};
  }

  toggle = () => {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    return (
      <div>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>Navbar</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='mr-2'></NavbarToggler>
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink gref='#'>react</NavLink>
              </NavItem>
              <NavItem>
                <NavLink gref="http://example.com">example.com</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default R049_ReactstrapNavbar;