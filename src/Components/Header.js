import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"

class Header extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Covid-19 Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto">
                <Link className="nav-link" to="/india">INDIA</Link>
                <Link className="nav-link" to="/world">WORLD</Link>
              </Nav>
  
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default Header;