import React, { Component } from "react";
// import "./Navigatie.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title={
                <div>
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{ marginRight: "10px" }}
                  />
                  Menu
                </div>
              }
              id="basic-nav-dropdown"
              style={{ marginLeft: "45px" }}
              className="no-caret" // nog aan te passen + css(pijltje wegdoen)
            >
              <NavDropdown.Item href="#rental">Rental</NavDropdown.Item>
              <NavDropdown.Item href="#travel">Travel</NavDropdown.Item>
              <NavDropdown.Item href="#training">Training</NavDropdown.Item>
              <NavDropdown.Item href="#routes">Routes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Container>
            <Row>
              <Col className="d-flex mx-auto">
                <Form inline className="d-flex mx-auto">
                  <span
                    style={{
                      color: "grey",
                      cursor: "default",
                      position: "absolute",
                      left: "220px",
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    style={{
                      marginRight: "550px",
                      width: "400px",
                    }}
                  />
                </Form>
              </Col>
            </Row>
          </Container>
        </Navbar.Collapse>
        <Navbar.Brand href="#logo">
          <img src="../src/images/ktm_logo.png" alt="Logo" />
          <br />
          SUPERSTORE
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavigationBar;
