import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <main  
        style={{
          minHeight: "1200px",
          background: "#00597b",
          padding: "25px 25px"
      }}>
        <section style={{textAlign: "center"}}>
          <figure className="kevin-container">
              <img className="kevin-pic" src={require("../static/images/avatars/Kevin.png")} alt="Anthony"/>
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
        <header style={{
          textAlign: "center", 
          color: "white", 
          fontSize: "10vh"}}>
        Projects</header>
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