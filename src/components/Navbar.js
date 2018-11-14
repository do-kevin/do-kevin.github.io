import React, { Component } from "react";

import "../css/Navbar.css";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toStickOrNot: {height: "25vmin"},
            sticky: {
                top: "0",
                width: "100%",
                height: "17vmin",
                position: "fixed",
                zIndex: "1"
            },
            placeholderStyles: null,
            stickyFontSize: {fontSize: "7vmin"}
        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll() {
    
      if (window.scrollY > window.innerHeight * 0.2) {
        this.setState({
            toStickOrNot: this.state.sticky,
            placeholderStyles: {height: "0"},
            stickyFontSize: {fontSize: "5vmin"}
        });
      } else if (window.scrollY < window.innerHeight * 0.3) {
        this.setState({
            toStickOrNot: {height: "22vmin"},
            placeholderStyles: {height: "2vmin"},
            stickyFontSize: {fontSize: "7vmin"}
        });
      }
    
    }


  render() {
    return (
        <div>
            <section 
                className="hero has-text-centered"
                id="portfolio-banner"
            >
                <h1 className="title noselect animated tada"
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
                style={this.state.toStickOrNot}
            >
                <div id="menu-box-placeholder" style={this.state.placeholderStyles}></div>
                <ul
                    id="menu-ul">
                    <li className="animated bounceInLeft"
                        id="left-menu-item">
                        <a  className="menu-choice"
                            style={this.state.stickyFontSize}
                            onClick={this.props.clickedAbout}
                        >ABOUT</a>
                    </li>
                    <li className="animated bounceInRight">
                        <a  className="menu-choice"
                            id="right-menu-item"
                            style={this.state.stickyFontSize}
                            onClick={this.props.clickedPortfolio}
                        >PORTFOLIO</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default Navbar;
