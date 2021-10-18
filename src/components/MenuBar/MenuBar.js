import React from 'react';
import { Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import "./MenuBar.css";
const MenuBar = () => {
    return (
        <div className="menubar">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <img className="logo me-5" src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" justify-content-end " style={{ width: "100%" }}>

                            <Form className="d-flex w-50">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>

                            <NavLink className="pe-3 ps-3 item" to="/home"><i class="fas fa-home"></i> Home</NavLink>

                            <NavLink className="pe-3 item" to="/services"><i class="fas fa-tasks"></i> Services</NavLink>

                            <NavLink className="pe-3 item" to="/contact"><i class="fas fa-envelope"></i> Contact</NavLink>

                            <NavLink className="pe-3 item" to="/appointment"><i class="far fa-calendar-check"></i> Appointment</NavLink>

                            <NavLink className="item" to="/login"><i class="fas fa-user"></i> Login</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;