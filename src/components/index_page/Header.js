import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./css/header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg bg-light fixed-top shadow-lg"
    >
      <Container>
        <Navbar.Brand className="special_link" href="index.html">
          checkup
          <strong className="d-block">Health care</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto align-items-center flex-row justify-content-between">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
            <Nav.Link href="#timeline">our services</Nav.Link>
            <Nav.Link className="special_link" href="#hero">
              {" "}
              checkup
              <strong className="d-block">Health care</strong>
            </Nav.Link>
            <Nav.Link href="#timeline">Feedback</Nav.Link>
            <Nav.Link href="#timeline">Application</Nav.Link>
            <NavLink className="nav-link" to="/Login">
              login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
