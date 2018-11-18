import React, { Component } from "react";

import "../css/About.css";

class About extends Component {
  render() {
    return (
      <div
        className={`${this.props.aboutAnimateClassNames}`}
        id="about-page"
      >
          <figure id="image-wrapper">
            <img
              src={require("../static/images/about-picture.jpg")}
              alt="avatar"
              id="about-picture"
              className="animated slideInUp delay-200ms"
            />
          </figure>
          <article className="section has-text-left animated slideInUp delay-200ms">
            <p id="profile-info">
                I'm a Los Angeles-based full-stack developer and November 2018 graduate from UCLAX's coding bootcamp. Driven by curiosity, I want to build a fun interactive experience between websites and users. I aim to hone my skills and to practice my craft so that I can deliver functional and beautiful websites. 
            </p>
          </article>
        </div>
    );
  }
}

export default About;
