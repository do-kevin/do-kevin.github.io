import React, { Component } from "react";

import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
        <div>
            <section 
                className="hero has-text-centered"
                id="portfolio-banner"
            >
                <h1 className="title noselect animated pulse"
                    id="banner-title"
                >
                    Kevin Do
                </h1>
                <h2 className="title noselect animated fadeIn delay-470ms"
                    id="banner-subtitle">
                    A Full-Stack Web Developer
                </h2>
            </section>
            <nav 
                className="breadcrumb is-centered" 
                id="menu-bar"
            >
                <div id="menu-box-placeholder"></div>
                <ul
                    id="menu-ul">
                    <li className="animated bounceInLeft">
                        <a href="javascript:void(0)"
                            className="menu-choice"
                            id="left-menu-item"
                            >PORTFOLIO</a>
                    </li>
                    <li className="animated bounceInRight">
                        <a href="javascript:void(0)"
                            className="menu-choice"
                            >ABOUT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default Navbar;
