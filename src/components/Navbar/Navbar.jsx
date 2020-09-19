import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Button, NavbarBrand, } from 'react-bootstrap';
import styles from "./Navbar.module.css"


const NavBarHome = () => {

  return (
      <div style={{background:"lightgrey"}}>
              <Navbar collapseOnSelect expand="lg" >
                  <Navbar.Brand>
                  <div className="himage">
                    <Link to="/"><img class="rounded-circle img-fluid icon bg-light float-left mr-2" style={{width:"50px",height:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-fhoMKzx5yVIT2Dwe1UHrcefHpMrt2MyABjybsORWvjqD-FFR&usqp=CAU"></img></Link>
                    <div class="pt-2"> Delicious</div>
                  </div>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto align-middle">
                      <NavDropdown title="sign up" className="sec" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#registermodal" data-toggle="modal">Signup</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="log in" className="sec" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#loginmodal" data-toggle="modal" data-target="#loginmodal">Login</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="help" className="sec" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                      <button type="button" className="btn btn-outline-dark font-weight-bold"  style={{fontSize:".70em",}}>CONTACT US</button>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
  </div>
  )
};

export default NavBarHome;