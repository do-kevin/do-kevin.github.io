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
                <h1 className="title"
                    id="banner-title"
                >
                    Kevin Do
                </h1>
                <h2 className="title"
                    id="banner-subtitle">
                    A Full-Stack Web Developer
                </h2>
            </section>
            <nav 
                className="breadcrumb" 
                id="menu-bar"
            >
                <ul className="is-centered"
                    id="menu-ul">
                    <li className="animated slideInLeft">
                        <a href="javascript:void(0)"
                            className="menu-choice"
                            >Portfolio</a>
                    </li>
                    <li className="animated slideInRight">
                        <a href="javascript:void(0)"
                            className="menu-choice"
                            >About</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default Navbar;
