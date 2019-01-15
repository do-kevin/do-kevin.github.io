import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="global-footer" style={{paddingTop: "1vh"}}>
      <section style={{
          width: "100%", 
          paddingLeft: "1vh"
          }}>
        <p className="crafted-by-text">
            Handcrafted by me
            <br />
            20 <i className="fas fa-copyright" /> 18
        </p>
      </section>
      <section style={{
          width: "100%",
          paddingRight: "2vh",
          paddingTop: "1vh", 
          textAlign: "right"
        }}>
            <a
            className="footer-github-btn"
            href="https://github.com/do-kevin" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-github-alt"></i></a>
            &nbsp;&nbsp;
            <a
            className="footer-linkedin-btn"
            href="https://www.linkedin.com/in/kevin-v-do" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-linkedin"></i></a>
            &nbsp;&nbsp;
            <a
            className="footer-resume-btn"
            href="https://www.visualcv.com/kevin-do-tech-19" target="_blank" rel="noreferrer noopener">
            <i className="far fa-id-card"></i></a>
      </section>
      </footer>
    );
  }
}

export default Footer;
