import React, { Component } from "react";

class ProjectOne extends Component {

  render() {
    let fontColor = "white";
    let h2marginTop = "2.4vh";
    return (
      <main
        style={{
          minHeight: "1200px",
          background: "#00597b"
        }}>
        <nav className="custom-navbar">
          <figure style={{width: "100%", textAlign: "left", padding: "3px 5px 3px 5px"}}>
            <img className="kevin-pic" 
              onClick={this.props.handleAbout}
              style={{width: "50px", height: "50px", cursor: "pointer"}}
              src={require("../static/images/avatars/Kevin.png")} alt="Kevin"/>
          </figure>
          <aside style={{width: "100%", textAlign: "right", padding: "1.9vh 10px 2.5vh 10px"}}>
            <nav className="custom-dropdown">
              <button 
                onClick={void(0)}
                className="drop-btn">
                Menu
              </button>
              <div className="drop-list">
                <button
                  onClick={this.props.handleAbout}>About</button>
                <button onClick={this.props.handleProjectTwo}>Neverending Dead</button>
                <button onClick={this.props.handleProjectThree}>Zephyr Node</button>
              </div>
            </nav>
          </aside>
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
          &nbsp;&nbsp;
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
          <hr style={{height: "1px", width: "200px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            A front-end web application that analyzes an image file whether it was taken using the webcam feature or uploaded by the user. After it successfully detects a facial emotion, it will play back a song associated with that emotion.
            <br/><br/>
            On this project, I was the front-end developer responsible for implementing the webcam by using WebRTC API. Some of WebRTC API's code had been deprecated so I had to research for updated code. I also worked on implementing Napster API and converting Base64 to JPEG format. The project used Materialize as its CSS framework, which I used to visually tweak the project.
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>
            Project Date&nbsp;&nbsp;
            <a
            className="visit-trello-btn"
            href="https://trello.com/b/aIbXUAJ1/project-one" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-trello"></i>&nbsp;Trello</a>
          </h2>
          <hr style={{height: "1px", width: "139px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            Sept. 7th - Sept. 11th, 2018 
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Roadblocks</h2>
          <hr style={{height: "1px", width: "135px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <ul style={{listStyleType: "circle", color: "white", marginLeft: "20px"}}>
            <li>Could not use Napster SDK v2.1 to play full songs because it was outdated.</li>
            <li>Figuring out how to convert Base64 code into JPEG.</li>
          </ul> 
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Technical Sheet</h2>
          <hr style={{height: "1px", width: "182px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="technical-sheet">
            <div className="technical-list-item" style={{backgroundColor: "#0068af"}}>jQuery</div>
            <div className="technical-list-item" style={{backgroundColor: "#b4491e"}}>jQuery UI</div>
            <div className="technical-list-item" style={{backgroundColor: "#f1db3f", color: "#323330"}}>JavaScript</div>
            <div className="technical-list-item" style={{backgroundColor: "#ffcb00", color: "#00597b"}}>Firebase</div>
            <div className="technical-list-item" style={{backgroundColor: "#f06d71"}}>Materialize CSS</div>
            <div className="technical-list-item">HTML</div>
          </section>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Teammates</h2>
          <hr style={{height: "1px", width: "132px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
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