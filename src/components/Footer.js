import React, { Component } from "react";
import {
  GithubIcon, LinkedinIcon, ResumeIcon,
} from "components/Icons";

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
            20 <i className="fas fa-copyright" /> {new Date().getFullYear().toString().substr(-2)}
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
              href="https://github.com/do-kevin"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon />
            </a>
            &nbsp;&nbsp;
            <a
              className="footer-linkedin-btn"
              href="https://www.linkedin.com/in/kevin-v-do"
              target="_blank"
              rel="noreferrer noopener"
            >
              <LinkedinIcon />
            </a>
            &nbsp;&nbsp;
            <a
              className="footer-resume-btn"
              href="https://www.visualcv.com/kevin-do-tech-19"
              target="_blank"
              rel="noreferrer noopener"
            >
            <ResumeIcon />
            </a>
      </section>
      </footer>
    );
  }
}

export default Footer;
