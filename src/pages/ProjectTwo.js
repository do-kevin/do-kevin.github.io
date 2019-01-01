import React, { Component } from "react";

const dropBtnBorders = {
  borderTopRightRadius: "40px",
  borderTopLeftRadius: "40px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid #101d4a"
}

class ProjectTwo extends Component {

  state = {
    displayDropdown: false
  };

  clickDropBtn = () => {
    this.setState({
      displayDropdown: !this.state.displayDropdown
    });
    console.log(this.state.displayDropdown);
  };

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
                onClick={this.clickDropBtn}
                style={this.state.displayDropdown ? dropBtnBorders : null}
                className="drop-btn">
                Menu
              </button>
              <div className="drop-list"
                style={{
                  display: (this.state.displayDropdown ? "block" : "none")
                }}>
                <button
                  onClick={this.props.handleAbout}>About</button>
                  <button onClick={this.props.handleProjectOne}>Mood & Music</button>
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
          This project was Tim Gorodnitski's idea to implement a database as a core gameplay mechanic. I was responsible for building the project's front end and UI/UX architecture that follows old school RPG character creation and gameplay screens. Moreover, I directed the game's combat mechanics between the player and the enemy. I manually tested the game many times to balance the stat modifiers and game mechanics.
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>
            Project Date&nbsp;&nbsp;
            <a
            className="visit-trello-btn"
            href="https://trello.com/b/LNv4noea/project-two" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-trello"></i>&nbsp;Trello</a>
          </h2>
          <hr style={{height: "1px", width: "139px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            October 4th - October 10th, 2018 
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Roadblocks</h2>
          <hr style={{height: "1px", width: "135px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <ul style={{listStyleType: "circle", color: "white", marginLeft: "20px"}}>
            <li>Our character creation was limited due to the difficulty of placing all body parts in their respective positions because they were SVGs.</li>
            <li>The most difficult part of the project was balancing the game as it relies heavily on stat modifiers and chances.</li>
          </ul> 
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Technical Sheet</h2>
          <hr style={{height: "1px", width: "182px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="technical-sheet">
            <div className="technical-list-item" style={{backgroundColor: "#006f00"}}>Node.js</div>
            <div className="technical-list-item" style={{backgroundColor: "rgb(50, 152, 246)"}}>Sequelize.js</div>
            <div className="technical-list-item" style={{backgroundColor: "#b94600"}}>SQL</div>
            <div className="technical-list-item" style={{backgroundColor: "#eeeeee", color: "#00597b"}}>Express.js</div>
            <div className="technical-list-item" style={{backgroundColor: "#0068af"}}>jQuery</div>
            <div className="technical-list-item" style={{backgroundColor: "#f1db3f", color: "#323330"}}>JavaScript</div>
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