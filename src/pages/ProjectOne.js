import React, { Component } from "react";

class ProjectOne extends Component {

  render() {
    let fontColor = "#cacaca";
    let h2marginTop = "2.4vh";
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
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>About the project</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            A front-end web application that analyzes an image file whether it was taken using the webcam feature or uploaded by the user. After it successfully detects a facial emotion, it will play back a song associated with that emotion.
            <br/><br/>
            On this project, I was the front-end developer responsible for implementing the webcam by using WebRTC API. Some of WebRTC API's code had been deprecated so I had to research for updated code. I also worked on implementing Napster API and converting Base64 to JPEG format. The project used Materialize as its CSS framework, which I used to visually tweak the project.
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Project Date</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            Sept. 7th - Sept. 11th, 2018 
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Roadblocks</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <ul style={{listStyleType: "circle", color: "white", marginLeft: "20px"}}>
            <li>Could not use Napster SDK because it was outdated.</li>
            <li>Figuring out how to convert Base64 code into JPEG.</li>
          </ul> 
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Technical Sheet</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="technical-sheet">
            <div className="technical-list-item">jQuery</div>
            <div className="technical-list-item">jQuery UI</div>
            <div className="technical-list-item">Firebase</div>
            <div className="technical-list-item">Materialize CSS</div>
            <div className="technical-list-item">HTML</div>
          </section>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Teammates</h2>
          <hr style={{height: "1px", width: "250px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="teammate-list">
            <figure className="teammate-container">
              <a
                href="https://github.com/JSR88431" target="_blank" rel="noreferrer noopener">
                <img className="teammate-pic" src={require("../static/images/avatars/Joseph.png")} alt="Joseph"/>
                Josephson Reynoso
              </a>
            </figure>
            <figure className="teammate-container">
              <a
                href="https://github.com/ironaidan" target="_blank" rel="noreferrer noopener">
                <img className="teammate-pic" src={require("../static/images/avatars/Aidan.png")} alt="Joseph"/>
                Aidan Nemeth
              </a>
            </figure>
          </section>
        </section>
      </main>
    );
  }
}

export default ProjectOne;