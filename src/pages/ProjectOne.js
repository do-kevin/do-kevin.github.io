import React, { Component } from "react";
import {
  LiveLinkIcon, GithubIcon, TrelloIcon,
} from "components/Icons";
import Anchor from "components/Anchor";
import TechListItem from "components/TechListItem";
import TeammateImageLink from "components/TeammateImageLink";

const dropBtnBorders = {
  borderTopRightRadius: "40px",
  borderTopLeftRadius: "40px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid hsl(227, 64%, 18%)"
};

let fontColor = "white";
let h2marginTop = "2.4vh";

class ProjectOne extends Component {
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
    const { displayDropdown } = this.state;
    return (
      <main
        style={{
          minHeight: "1200px",
          background: "hsl(197, 100%, 24%)"
        }}>
        <nav className="custom-navbar">
          <figure style={{ width: "100%", textAlign: "left", padding: "3px 5px 3px 5px" }}>
            <img className="kevin-pic"
              onClick={this.props.handleAbout}
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
              src={require("static/images/avatars/Kevin.png")}
              alt="Kevin"
            />
          </figure>
          <aside style={{ width: "100%", textAlign: "right", padding: "1.9vh 10px 2.5vh 10px" }}>
            <nav className="custom-dropdown">
              <button
                className="drop-btn"
                onClick={this.clickDropBtn}
                style={
                  displayDropdown
                    ? dropBtnBorders
                    : null
                }
              >
                Menu
              </button>
              <div className="drop-list"
                style={{
                  display: (displayDropdown ? "block" : "none")
                }}
              >
                <button
                  onClick={this.props.handleAbout}
                >
                  About
                </button>
                <button
                  onClick={this.props.handleProjectTwo}
                >
                  Neverending Dead
                </button>
                <button
                  onClick={this.props.handleProjectThree}
                >
                  Zephyr Node
                </button>
              </div>
            </nav>
          </aside>
        </nav>
        {/* Information */}
        <section
          className="section"
          style={{
            maxWidth: "972px",
            margin: "auto"
          }}>
          <header
            className="has-text-centered has-text-white"
            style={{ fontSize: "9vmin" }}
          >
            Music & Mood
          </header>
          <Anchor
            className="visit-website-btn"
            href="https://do-kevin.github.io/Mood-and-Music"
          >
            <LiveLinkIcon />&nbsp;Live Website
          </Anchor>
          &nbsp;&nbsp;
          <Anchor
            className="visit-github-btn"
            href="https://github.com/do-kevin/Mood-and-Music"
          >
            <GithubIcon />&nbsp;GitHub
          </Anchor>
          <Anchor
            href="https://do-kevin.github.io/Mood-and-Music"
          >
            <figure className="project-img-container">
              <figure className="image is-16by9">
                <img
                  style={{ borderRadius: "5px" }}
                  src={require("static/images/moodNmusic.png")}
                  alt="moodNmusic.png"
                />
              </figure>
            </figure>
          </Anchor>
          <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
            About the project
          </h2>
          <hr style={{ height: "1px", width: "200px", marginTop: "1vh", marginBottom: "1vh", background: fontColor }} />
          <p style={{ textAlign: "left", color: fontColor }}>
            A front-end web application that analyzes an image file whether it was taken using the webcam feature or uploaded by the user. After it successfully detects a facial emotion, it will play back a song associated with that emotion.
            <br /><br />
            On this project, I was the front-end developer responsible for implementing the webcam by using WebRTC API. Some of WebRTC API's code had been deprecated so I had to research for updated code. I also worked on implementing Napster API and successfully converting Base64 to JPEG format. The project was then able to send a JPEG to Firebase, which allows ParallelDots to analyze for facial emotions. I manually tested the project for the most accurate results from the ParallelDots API. I designed the project with Materialize CSS framework and CSS3.
          </p>
          <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
            Project Date
            &nbsp;&nbsp;
            <Anchor
              className="visit-trello-btn"
              href="https://trello.com/b/aIbXUAJ1/project-one"
            >
              <TrelloIcon />&nbsp;Trello
            </Anchor>
          </h2>
          <hr style={{ height: "1px", width: "139px", marginTop: "1vh", marginBottom: "1vh", background: fontColor }} />
          <p style={{ textAlign: "left", color: fontColor }}>
            Sept. 7th - Sept. 11th, 2018
          </p>
          <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>Roadblocks</h2>
          <hr style={{ height: "1px", width: "135px", marginTop: "1vh", marginBottom: "1vh", background: fontColor }} />
          <ul style={{ listStyleType: "circle", color: "white", marginLeft: "20px" }}>
            <li>Could not use Napster SDK v2.1 to play full songs because it was outdated.</li>
            <li><strike>Figuring out how to convert Base64 code into JPEG.</strike></li>
          </ul>
          <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>Technical Sheet</h2>
          <hr style={{ height: "1px", width: "182px", marginTop: "1vh", marginBottom: "1vh", background: fontColor }} />
          <section className="technical-sheet">
            <TechListItem
              text="jQuery"
              backgroundColor="hsl(204, 100%, 35%)"
            />
            <TechListItem
              text="jQuery UI"
              backgroundColor="hsl(17, 71%, 41%)"
            />
            <TechListItem
              text="JavaScript"
              backgroundColor="hsl(53, 86%, 60%)"
              color="hsl(80, 3%, 20%)"
            />
            <TechListItem
              text="Firebase"
              backgroundColor="hsl(48, 100%, 50%)"
              color="hsl(197, 100%, 24%)"
            />
            <TechListItem
              text="Gulp"
              backgroundColor="hsl(360, 59%, 55%)"
            />
            <TechListItem
              text="Stylus"
              backgroundColor="hsl(9, 100%, 64%)"
            />
            <TechListItem
              text="Materialize CSS"
              backgroundColor="hsl(358, 81%, 69%)"
            />
            <TechListItem text="HTML5" />
          </section>
          <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>Teammates</h2>
          <hr style={{ height: "1px", width: "132px", marginTop: "1vh", marginBottom: "1vh", background: fontColor }} />
          <section className="teammate-list">
            <TeammateImageLink
              name="Josephson Reynoso"
              href="https://github.com/JSR88431"
              src={require("static/images/avatars/Joseph.png")}
              alt="Joseph"
            />
            <TeammateImageLink
              name="Aidan Nemeth"
              href="https://github.com/ironaidan"
              src={require("static/images/avatars/Aidan.png")}
              alt="Aidan"
            />
          </section>
        </section>
      </main>
    );
  }
}

export default ProjectOne;