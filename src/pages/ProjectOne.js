import React, { Component } from "react";

class ProjectOne extends Component {
  render() {
    let fontColor = "#cacaca";
    return (
      <main
        style={{
          minHeight: "1200px",
          background: "#00597b"
        }}>
        <nav className="custom-navbar">
          <nav className="custom-dropdown">
            <button 
              className="drop-btn">
              Menu
            </button>
            <div className="drop-list">
              <button
                onClick={this.props.handleAbout}>About</button>
              <button>The Neverending Dead</button>
              <button>Zephyr Node</button>
            </div>
          </nav>
        </nav>
        {/* Information */}
        <section className="section" 
          style={{
            border: "2px solid yellow",
            maxWidth: "972px",
            margin: "auto"
          }}>
          <header 
            className="has-text-centered has-text-white"
            style={{fontSize: "9vmin"}}>
            Music & Mood
          </header> 
          <a 
            className="visit-website-btn"
            href="https://do-kevin.github.io/Mood-and-Music" target="_blank" rel="noreferrer noopener">
            <i className="fas fa-external-link-square-alt"></i>&nbsp;Live Website</a>
          {"  "}
          <a
            className="visit-github-btn"
            href="https://github.com/do-kevin/Mood-and-Music" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-github-alt"></i>&nbsp;GitHub</a>
          <a href="https://do-kevin.github.io/Mood-and-Music" target="_blank" rel="noreferrer noopener">
            <figure className="project-img-container">
                <figure className="image is-16by9">
                  <img 
                    style={{borderRadius: "5px"}}
                    src={require("../static/images/moodNmusic.png")} alt="moodNmusic.png"/>
                </figure>
            </figure>
          </a>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: "2vh"}}>About the project</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            On this project, I was responsible for implementing the webcam using WebRTC API. I've also worked on including Napter API as well and combining the two APIs together.
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: "2vh"}}>Role</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            I was the front-end developer.
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: "2vh"}}>Timeframe</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            Made in ten days
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: "2vh"}}>Technical Sheet</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            The coding technologies I use for this project are. . .
          </p>
        </section>
      </main>
    );
  }
}

export default ProjectOne;