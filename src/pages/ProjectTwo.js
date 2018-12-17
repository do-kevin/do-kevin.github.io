import React, { Component } from "react";

class ProjectTwo extends Component {

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
          <nav className="custom-dropdown">
            <button 
              className="drop-btn">
              Menu
            </button>
            <div className="drop-list">
              <button
                onClick={this.props.handleAbout}>About</button>
              <button onClick={this.props.handleProjectOne}>Mood & Music</button>
              <button onClick={this.props.handleProjectThree}>Zephyr Node</button>
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
            The Neverending Dead
          </header> 
          <a 
            className="visit-website-btn"
            href="https://neverending-dead.herokuapp.com" target="_blank" rel="noreferrer noopener">
            <i className="fas fa-external-link-square-alt"></i>&nbsp;Live Website</a>
          &nbsp;&nbsp;
          <a
            className="visit-github-btn"
            href="https://github.com/do-kevin/Neverending-Dead" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-github-alt"></i>&nbsp;GitHub</a>
          <a href="https://neverending-dead.herokuapp.com" target="_blank" rel="noreferrer noopener">
            <figure className="project-img-container">
                <figure className="image is-16by9">
                  <img 
                    style={{borderRadius: "5px"}}
                    src={require("../static/images/neverending.png")} alt="moodNmusic.png"/>
                </figure>
            </figure>
          </a>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>About the project</h2>
          <hr style={{height: "1px", width: "200px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
          A simple RPG boss rush game where the player must defeat an army of other players who've died trying to reach the final boss.<br/><br/>
          If the player dies, his or her current health points and attack rating will be recorded. Their dead character will be pushed into the database, joining the army of undead players.<br/><br/>
          If the last boss is defeated, the curse transfers to the character and makes him or her the new and final boss that other players will have to defeat.
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Project Date</h2>
          <hr style={{height: "1px", width: "139px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            October 2018 
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Roadblocks</h2>
          <hr style={{height: "1px", width: "135px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <ul style={{listStyleType: "circle", color: "white", marginLeft: "20px"}}>
            <li>Game Balance.</li>
            <li>Avatar Customization.</li>
          </ul> 
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Technical Sheet</h2>
          <hr style={{height: "1px", width: "182px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="technical-sheet">
            <div className="technical-list-item" style={{backgroundColor: "#0068af"}}>jQuery</div>
            <div className="technical-list-item" style={{backgroundColor: "#ffcb00", color: "#2c384b"}}>SQL</div>
            <div className="technical-list-item" style={{backgroundColor: "#f06d71"}}>Bulma</div>
            <div className="technical-list-item">Node.js</div>
          </section>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Teammates</h2>
          <hr style={{height: "1px", width: "132px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="teammate-list">
            <figure className="teammate-container">
              <a
                href="https://github.com/ajz003" target="_blank" rel="noreferrer noopener">
                <img className="teammate-pic" src={require("../static/images/avatars/Anthony.png")} alt="Anthony"/>
                Anthony Zheng
              </a>
            </figure>
            <figure className="teammate-container">
              <a
                href="https://github.com/karlChainBLX" target="_blank" rel="noreferrer noopener">
                <img className="teammate-pic" src={require("../static/images/avatars/Karl.png")} alt="Karl"/>
                Karl Seelig
              </a>
            </figure>
            <figure className="teammate-container">
              <a
                href="https://github.com/TimGorodnitski" target="_blank" rel="noreferrer noopener">
                <img className="teammate-pic" src={require("../static/images/avatars/Tim.png")} alt="Tim"/>
                Tim Gorodnitski
              </a>
            </figure>
          </section>
        </section>
      </main>
    );
  }
}

export default ProjectTwo;