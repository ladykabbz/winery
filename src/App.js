import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import RotateExample from "./animes";

export default function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            ROCKS PLAYHOUSE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="intro">
        <div className="container">
          <RotateExample />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h3 className="about">ALL ABOUT ROCKS PLAYHOUSE</h3>
            <p className="talkrocks">
              lorem ipsum bla bla bla bla bla bla bla bla njsdc njs lorem ipsum
              lorem ipsum bla bla bla bla bla bla bla bla njsdc njs bla bla bla
              lorem ipsum bla bla bla bla bla bla bla bla njsdc njs bla bla bla
              bla bla njsdc njs lorem ipsum bla bla bla bla bla bla bla bla
              njsdc njs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
