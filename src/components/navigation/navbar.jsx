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
import logo from "../../assets/logo site.png";

export default function CustomNavbar() {
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
                    <Col className="d-flex justify-content-center align-items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ marginRight: "10px" }}
                        />
                        My First Motor Site
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <FontAwesomeIcon
                                icon={faSearch}
                                style={linkStyle}
                            />
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                    value={searchValue}
                                    onChange={handleSearchChange}
                                    style={{
                                        marginLeft: "10px",
                                        width: "250px",
                                    }}
                                />
                            </Form>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <HiUserCircle style={{ marginRight: "10px" }} />
                            <HiShoppingCart />
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <a href="#overus">Over ons</a>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <Nav>
                            <NavDropdown
                                title={<div style={linkStyle}>Models</div>}
                                style={dropdownStyle}
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#bmw">
                                    BMW
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#yamaha">
                                    Yamaha
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#ktm">
                                    KTM
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#kawasaki">
                                    Kawasaki
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#honda">
                                    Honda
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}
