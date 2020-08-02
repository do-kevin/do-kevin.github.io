import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className={`${this.props.aboutAnimateClassNames}`} id="about-page">
        <figure id="image-wrapper">
          <img
            src={require("../static/images/about-picture.jpg")}
            alt="avatar"
            id="about-picture"
            className="animated pulse delay-200ms"
          />
        </figure>
        <article className="section has-text-left">
          <p id="profile-info">
            I am a front-end engineer and an UCLAX coding bootcamp graduate
            that is based in Los Angeles. Driven by curiosity, I strive to build
            a fun interactive experience between websites and users. I aim to
            hone my skills and to practice my craft so I can deliver functional
            and beautiful websites.
          </p>
          <br />
          <p id="profile-info" className="has-text-centered">
            View my resume or contact me:
            <br/><br/>
            <a className="external-links button" href="https://www.visualcv.com/kevin-do-tech-18" target="_blank" rel="noreferrer noopener">
              <i className="fas fa-portrait"></i>&nbsp;Resume
            </a>
            &nbsp;&nbsp;
            <a className="external-links button" href="https://www.linkedin.com/in/kevin-v-do" target="_blank" rel="noreferrer noopener">
              Linked<i className="fab fa-linkedin"></i>
            </a>
          </p>
        </article>
      </div>
    );
  }
}

export default About;
