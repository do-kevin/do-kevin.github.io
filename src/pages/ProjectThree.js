import React, { Component } from "react";

class ProjectThree extends Component {

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
              <button onClick={this.props.handleProjectTwo}>The Neverending Dead</button>
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
            Zephyr Node
          </header> 
          <a 
            className="visit-website-btn"
            href="https://zephyr-node.herokuapp.com" target="_blank" rel="noreferrer noopener">
            <i className="fas fa-external-link-square-alt"></i>&nbsp;Live Website</a>
          &nbsp;&nbsp;
          <a
            className="visit-github-btn"
            href="https://github.com/do-kevin/Zephyr-Node" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-github-alt"></i>&nbsp;GitHub</a>
          <a href="https://zephyr-node.herokuapp.com" target="_blank" rel="noreferrer noopener">
            <figure className="project-img-container">
                <figure className="image is-16by9">
                  <img 
                    style={{borderRadius: "5px"}}
                    src={require("../static/images/zephyrnode.png")} alt="zephyrnode.png"/>
                </figure>
            </figure>
          </a>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>About the project</h2>
          <hr style={{height: "1px", width: "200px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
              A productivity app that helps organize their notes, to-dos, reminders, and flashcard decks. Its unique feature is giving users the option to send reminders and flashcards as text messages.
              <br/><br/>
              I was responsible for developing the front-end components and pages, UX/UI architecture, and mapping out our React components. I helped build the back end for the flashcard decks. 
              <br/><br/>
              I am currently implementing mobile responsiveness into the website.
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>
            Project Date&nbsp;&nbsp;
            <a
            className="visit-trello-btn"
            href="https://trello.com/b/tC7GE5wX/project-three" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-trello"></i>&nbsp;Trello</a>
          </h2>
          <hr style={{height: "1px", width: "139px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <p style={{textAlign: "left", color: fontColor}}>
            October 30th - November 5th, 2018<br/>
          </p>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Roadblocks</h2>
          <hr style={{height: "1px", width: "135px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <ul style={{listStyleType: "circle", color: "white", marginLeft: "20px"}}>
            <li>Heroku returns the time only in UTC (Universal Time Coordinated). We wanted it to display the current time based on the user's timezone; however, all we could do was convert Heroku's UTC timezone to Pacific Time. </li>
            <li>Difficulty making the flipping flashcards mobile responsive.</li>
          </ul> 
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Technical Sheet</h2>
          <hr style={{height: "1px", width: "182px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="technical-sheet">
            <div className="technical-list-item" style={{backgroundColor: "#282c33", color: "#5adafd"}}>React</div>
            <div className="technical-list-item" style={{backgroundColor: "#006f00"}}>Node.js</div>
            <div className="technical-list-item" style={{backgroundColor: "rgb(50, 152, 246)"}}>Sequelize.js</div>
            <div className="technical-list-item" style={{backgroundColor: "#ffcb00", color: "#2c384b"}}>SQL</div>
            <div className="technical-list-item" style={{backgroundColor: "#eeeeee", color: "#00597b"}}>Express.js</div>
            <div className="technical-list-item" style={{backgroundColor: "#f06d71"}}>Bootstrap</div>
            <div className="technical-list-item" style={{backgroundColor: "#f1db3f", color: "#323330"}}>JavaScript</div>
          </section>
          <h2 style={{fontSize: "24px", color: fontColor, marginTop: h2marginTop}}>Teammates</h2>
          <hr style={{height: "1px", width: "132px", marginTop: "1vh", marginBottom: "1vh", background: fontColor}}/>
          <section className="teammate-list">
            <figure className="teammate-container">
              <a
                href="https://github.com/pauline-ann" target="_blank" rel="noreferrer noopener">
                <img className="teammate-pic" src={require("../static/images/avatars/Pauline.png")} alt="Pauline"/>
                Pauline Bantayan
              </a>
            </figure>
            <figure className="teammate-container">
              <a
                href="https://github.com/chrisArmo" target="_blank" rel="noreferrer noopener">
                <img className="teammate-pic" src={require("../static/images/avatars/Chris.png")} alt="Chris"/>
                Chris Armendez
              </a>
            </figure>
            <figure className="teammate-container">
              <a
                href="https://github.com/aparakaki" target="_blank" rel="noreferrer noopener">
                <img className="teammate-pic" src={require("../static/images/avatars/Ana.png")} alt="Ana"/>
                Ana Arakaki
              </a>
            </figure>
          </section>
        </section>
      </main>
    );
  }
}

export default ProjectThree;