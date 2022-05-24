import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import logo from "../../../capfront/static/assets/images/Warren's Surf Shop -01.jpg";

export default class Navigation extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <Navbar>
                    <div className="links-wrapper">
                        <Nav navbar>
                            <NavItem>
                                <NavLink exact to="/" className="navbarLinks">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about/" className="navbarLinks">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact" className="navbarLinks">
                                    Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/surfboard" className="navbarLinks">
                                    Surfboards
                                </NavLink>
                            </NavItem>

                        </Nav>

                    </div>
                </Navbar>
                <div className="img-wrapper">

                    <img src={logo} />

                </div>

                <div className="contact-column">
                    <div class="address-wrapper">
                        <p>Located in Seaside Park, </p>
                            <p>New Jersey  </p>
                    </div>

                </div>

            </div>
        );
    }
}

