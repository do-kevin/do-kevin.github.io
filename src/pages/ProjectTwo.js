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
          A full-stack web game where players must defeat zombies and reach the final boss. However, these zombies are actually other players who have died in their attempt to reach the final boss. If the player dies, his or her avatar's stats (health and attack ratings) are recorded and pushed into the database; therefore, the player's avatar woul join the army of undead players. This is most compatible with Google Chrome.
          <br/><br/>
          This project was Tim Gorodnitski's idea to implement a database as core gameplay mechanic. I was responsible for building the project's front end and UI/UX architecture that follows old school RPG character creation and gameplay screens. Moreover, I directed the game's combat mechanics between the player and the enemy. 
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Project Date</h2>
          <hr style={{height: "1px", width: "139px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            October 4th - October 10th, 2018 
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Roadblocks</h2>
          <hr style={{height: "1px", width: "135px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <ul style={{listStyleType: "circle", color: "white", marginLeft: "20px"}}>
            <li>Our character creation was limited because of the difficulty of swtiching between specific body parts that were SVGs.</li>
            <li>The most difficult part of the project was balancing the game as it relies heavily on stat modifiers and chances.</li>
          </ul> 
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Technical Sheet</h2>
          <hr style={{height: "1px", width: "182px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="technical-sheet">
            <div className="technical-list-item" style={{backgroundColor: "#006f00"}}>Node.js</div>
            <div className="technical-list-item" style={{backgroundColor: "rgb(50, 152, 246)"}}>Sequelize.js</div>
            <div className="technical-list-item" style={{backgroundColor: "#b94600"}}>SQL</div>
            <div className="technical-list-item" style={{backgroundColor: "#eeeeee", color: "black"}}>Express.js</div>
            <div className="technical-list-item" style={{backgroundColor: "#0068af"}}>jQuery</div>
            <div className="technical-list-item" style={{backgroundColor: "#00d2b2"}}>Bulma</div>
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