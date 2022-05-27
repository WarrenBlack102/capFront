import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../capfront/static/assets/images/Warren's Surf Shop -02.jpg";

export default class Navigation extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="navigation-wrapper">

                <div className="tabs-wrapper">
                    <NavLink exact to="/" className="tabs">
                        Home
                    </NavLink>

                    <NavLink to="/about/" className="tabs">
                        About
                    </NavLink>

                    <NavLink to="/contact" className="tabs">
                        Contact
                    </NavLink>

                    <NavLink to="/surfboard" className="tabs">
                        Surfboards
                    </NavLink>
                </div>

                <div className="img-wrapper">

                    <img src={logo} />

                </div>

                <div className="contact-column">
                    <div className="address-wrapper">
                        <p>Located in Seaside Park, </p>
                        <p>New Jersey  </p>
                    </div>

                </div>

            </div>
        );
    }
}

