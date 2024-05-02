import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./css/header.css";
function Header() {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg bg-light fixed-top shadow-lg"
    >
      <Container style={{ alignItems: "center", minHeight: "75px" }}>
        <Navbar.Brand className="logo" href="index.html">
          <Link to="/">
            <div>
              check<span>up </span>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="m-auto align-items-center flex-row justify-content-around "
            style={{ flex: "1", minHeight: "110px" }}
          >
            <div className="links">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About Us
              </NavLink>
            </div>
            <button className="nav-bar-button">MAKE A CHECK-UP</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
