import React, { Component } from "react";

// import "../css/Footer.css";

class Footer extends Component {
    render() {
        return(
            <footer className="footer animated slideInUp"
                    id="page-footer">
                <div className="content">
                    
                    <p className="has-text-centered noselect" id="footer-text">
                        <a href="https://github.com/do-kevin" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-github"></i>
                        </a>
                            &nbsp;&nbsp;Handcrafted by me&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/kevin-v-do/" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-linkedin linkedin-foot"></i>
                        </a>
                        <br/> 
                            20 <i className="fas fa-copyright"></i> 18
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;