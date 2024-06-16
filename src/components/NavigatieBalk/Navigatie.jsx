import React, { useState } from "react";
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
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HiUserCircle } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import "../banner/test.css";

function NavigationBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "darkgray",
  };

  const dropdownStyle = {
    backgroundColor: "transparent !important",
  };

  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Navbar.Brand href="#logo" style={linkStyle}>
              <img
                src="../src/images/logo.png"
                alt="Logo"
                style={{ marginRight: "10px", marginLeft: "-50px" }}
              />
              TwoWheelGetaways
            </Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-center">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginLeft: "300px", color: "white" }}>
                <FontAwesomeIcon icon={faSearch} style={linkStyle} />
              </div>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={searchValue}
                  onChange={handleSearchChange}
                  style={{ marginLeft: "10px", width: "250px" }}
                />
              </Form>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "50px",
                marginRight: "50px",
              }}
            >
              <HiUserCircle />
              <HiShoppingCart />
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            {/* Voeg hier de link naar de "Over ons" pagina toe */}
            <a href="#overus" style={linkStyle}>
              Over ons
            </a>
          </Col>
          <Col className="d-flex justify-content-center">
            <Nav style={{ marginLeft: "20px" }}>
              <NavDropdown
                title={<div style={linkStyle}>Models</div>}
                style={dropdownStyle}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#bmw">BMW</NavDropdown.Item>
                <NavDropdown.Item href="#yamaha">Yamaha</NavDropdown.Item>
                <NavDropdown.Item href="#ktm">KTM</NavDropdown.Item>
                <NavDropdown.Item href="#kawasaki">Kawasaki</NavDropdown.Item>
                <NavDropdown.Item href="#honda">Honda</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
