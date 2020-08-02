import React from "react";
import Anchor from "components/Anchor";
import { Navbar } from "components/layout";
import {
  LiveLinkIcon, GithubIcon, TrelloIcon,
} from "components/Icons";
import LargeProjectImage from "components/LargeProjectImage";
import HorizontalRule from "components/HorizontalRule";
import TechListItem from "components/TechListItem";
import TeammateImageLink from "components/TeammateImageLink";

let fontColor = "white";
let h2marginTop = "2.4vh";

function ProjectThree(props) {
  const {
    handleAbout, handleProjectOne, handleProjectTwo,
  } = props;

  return (
    <main
      style={{
        minHeight: "1200px",
        background: "#00597b"
      }}>
      <Navbar onClickKevinPic={() => handleAbout()}>
        <button onClick={() => handleAbout()}>
          About
        </button>
        <button onClick={() => handleProjectOne()}>
          Mood & Music
        </button>
        <button onClick={() => handleProjectTwo()}>
          Neverending Dead
        </button>
      </Navbar>
      {/* Information */}
      <section className="section"
        style={{
          maxWidth: "972px",
          margin: "auto"
        }}>
        <header
          className="has-text-centered has-text-white"
          style={{ fontSize: "9vmin" }}
        >
          Zephyr Node
        </header>
        <Anchor
          className="visit-website-btn"
          href="https://zephyr-node.herokuapp.com"
        >
          <LiveLinkIcon />
          &nbsp;
          Live Website
        </Anchor>
        &nbsp;&nbsp;
        <Anchor
          className="visit-github-btn"
          href="https://github.com/do-kevin/Zephyr-Node"
        >
          <GithubIcon />
          &nbsp;
          GitHub
        </Anchor>
        <Anchor href="https://zephyr-node.herokuapp.com">
          <LargeProjectImage
            src={require("static/images/zephyrnode.png")}
            alt="zephyrnode.png"
          />
        </Anchor>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          About the project
        </h2>
        <HorizontalRule width="200px" />
        <p style={{ textAlign: "left", color: fontColor }}>
          A productivity app that helps organize their notes, to-dos, reminders, and flashcard decks. Its unique feature is giving users the option to send reminders and flashcards as text messages.
              <br /><br />
          I was responsible for developing the front-end components and pages, UX/UI architecture, and mapping out our React components. I brought my wireframe from conception into prototyping before development started. I built maintainable, reusuable code for the project and made it front-end architecture modular for any additional features. I developed the front end for logging in and registering, creating notes, and generating flashcard decks. I contributed to building the back end for the flashcard decks. I manually tested the project for accurate relational data that is tied to each user and for successful SMS messaging.
              <br /><br />
          I am currently implementing mobile responsiveness into the website.
          </p>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          Project Date&nbsp;&nbsp;
            <Anchor
              className="visit-trello-btn"
              href="https://trello.com/b/tC7GE5wX/project-three"
            >
              <TrelloIcon />
              &nbsp;
              Trello
            </Anchor>
        </h2>
        <HorizontalRule width="139px" />
        <p style={{ textAlign: "left", color: fontColor }}>
          October 30th - November 5th, 2018<br />
        </p>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          Roadblocks
        </h2>
        <HorizontalRule width="135px" />
        <ul style={{ listStyleType: "circle", color: "white", marginLeft: "20px" }}>
          <li>Heroku returns the time only in UTC (Universal Time Coordinated). We wanted it to display the current time based on the user's timezone; however, all we could do was convert Heroku's UTC timezone to Pacific Time. </li>
          <li>Difficulty making the flippable flashcards mobile responsive.</li>
        </ul>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          Technical Sheet
        </h2>
        <HorizontalRule width="182px" />
        <section className="technical-sheet">
          <TechListItem
            text="React"
            backgroundColor="hsl(218, 12%, 18%)"
            color="hsl(193, 98%, 67%)"
          />
          <TechListItem
            text="Node.js"
            backgroundColor="hsl(120, 100%, 22%)"
          />
          <TechListItem
            text="Sequelize.js"
            backgroundColor="hsl(209, 92%, 58%)"
          />
          <TechListItem
            text="SQL"
            backgroundColor="hsl(48, 100%, 50%)"
            color="hsl(217, 26%, 24%)"
          />
          <TechListItem
            text="Express.js"
            backgroundColor="hsl(0, 0%, 93%)"
            color="hsl(197, 100%, 24%)"
          />
          <TechListItem
            text="SASS"
            backgroundColor="hsl(330, 49%, 55%)"
          />
          <TechListItem
            text="Bootstrap"
            backgroundColor="hsl(263, 35%, 36%)"
          />
          <TechListItem
            text="JavaScript"
            backgroundColor="hsl(53, 86%, 60%)"
            color="hsl(80, 3%, 20%)"
          />
        </section>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          Teammates
        </h2>
        <HorizontalRule width="132px" />
        <section className="teammate-list">
          <TeammateImageLink
            name="Pauline Bantayan"
            href="https://github.com/pauline-ann"
            src={require("static/images/avatars/Pauline.png")}
            alt="Pauline.png"
          />
          <TeammateImageLink
            name="Chris Armendez"
            href="https://github.com/chrisArmo"
            src={require("static/images/avatars/Chris.png")}
            alt="Chris.png"
          />
          <TeammateImageLink
            name="Ana Arakaki"
            href="https://github.com/aparakaki"
            src={require("static/images/avatars/Ana.png")} 
            alt="Ana.png"
          />
        </section>
      </section>
    </main>
  );
}

export default ProjectThree;
