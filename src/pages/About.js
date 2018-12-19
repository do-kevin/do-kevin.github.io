import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <main  
        style={{
          minHeight: "1200px",
          background: "#00597b",
          padding: "50px 25px"
      }}>
        <section style={{textAlign: "center"}}>
          <figure className="kevin-container">
              <img className="kevin-pic" src={require("../static/images/avatars/Kevin.png")} alt="Kevin"/>
          </figure>
          <header>
            <span style={{color: "white", fontSize: "10vh"}}>
              Kevin Do
            </span>
          </header>
          <h2 style={{color: "white", fontSize: "4vh", marginTop: 0}}>
            A Front-End Engineer
          </h2>
        </section>
        <section style={{textAlign: "center", marginTop: "10px", marginBottom: "50px"}}>
        <a
          className="visit-github-btn"
          href="https://github.com/do-kevin" target="_blank" rel="noreferrer noopener">
          <i className="fab fa-github-alt"></i>&nbsp;GitHub</a>
          &nbsp;&nbsp;
        <a
          className="visit-linkedin-btn"
          href="https://www.linkedin.com/in/kevin-v-do" target="_blank" rel="noreferrer noopener">
          <i className="fab fa-linkedin"></i>&nbsp;LinkedIn</a>
          &nbsp;&nbsp;
        <a
          className="visit-resume-btn"
          href="https://www.visualcv.com/kevin-do-tech-18" target="_blank" rel="noreferrer noopener">
          <i className="far fa-id-card"></i>&nbsp;Resume</a>
          &nbsp;
        </section>
        <header style={{
          textAlign: "center", 
          color: "white", 
          fontSize: "10vh"}}>
        Projects</header>
        <p id="project-tab-guide">Click on a project tab to see its information.</p>
        <section id="showcase-projects">
            <figure className="project-showcase-container">
              <div>
                <h1>Mood & Music</h1>
                <img
                  onClick={this.props.handleProjectOne}
                  src={require("../static/images/moodNmusic.png")} alt="moodNmusic.png"/>
                <p><i className="fas fa-hand-point-up"></i></p>
              </div>
            </figure>
            <figure className="project-showcase-container">
            <div>
                <h1>The Neverending Dead</h1>
              <img
                onClick={this.props.handleProjectTwo}
                src={require("../static/images/neverending.png")} alt="moodNmusic.png"/>
                <p><i className="fas fa-hand-point-up"></i></p>
              </div>
            </figure>
            <figure className="project-showcase-container">
            <div>
                <h1>Zephyr Node</h1>
              <img
                onClick={this.props.handleProjectThree}
                src={require("../static/images/zephyrnode.png")} alt="zephyrnode.png"/>
                <p><i className="fas fa-hand-point-up"></i></p>
              </div>
            </figure>
        </section>
      </main>
    );
  }
}

export default About;