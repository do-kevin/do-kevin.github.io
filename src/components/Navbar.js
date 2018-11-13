import React, { Component } from "react";

import "../css/Navbar.css";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toStickOrNot: null,
            sticky: {
                top: "0",
                width: "100%",
                position: "fixed",
                zIndex: "1"
            },
            placeholderColor: null
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
    
      if (window.scrollY > 100) {
        this.setState({
            toStickOrNot: this.state.sticky,
            placeholderColor: {background: "#ffc800"}
        });
      } else if (window.scrollY < 100) {
        this.setState({
            toStickOrNot: null,
            placeholderColor: {background: "#005fc2"}
        });
      }
    
    }


  render() {
    
    console.log(window.scrollY, "scrollY");
    console.log(window.innerHeight, "innerHeight");

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
                <div id="menu-box-placeholder" style={this.state.placeholderColor}></div>
                <ul
                    id="menu-ul">
                    <li className="animated bounceInLeft"
                        id="left-menu-item">
                        <a href="javascript:void(0)"
                            className="menu-choice"
                        >ABOUT</a>
                    </li>
                    <li className="animated bounceInRight">
                        <a href="javascript:void(0)"
                            className="menu-choice"
                            id="right-menu-item"
                            >PORTFOLIO</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default Navbar;
