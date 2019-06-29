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

function ProjectTwo(props) {
  const {
    handleAbout, handleProjectOne, handleProjectThree,
  } = props;
  return (
    <main
      style={{
        minHeight: "1200px",
        background: "hsl(197, 100%, 24%)"
      }}>
      <Navbar onClickKevinPc={() => handleAbout()}>
        <button onClick={() => handleAbout()}>
          About
        </button>
        <button onClick={() => handleProjectOne()}>
          Mood & Music
        </button>
        <button onClick={() => handleProjectThree()}>
          Zephyr Node
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
          The Neverending Dead
        </header>
        <Anchor
          className="visit-website-btn"
          href="https://neverending-dead.herokuapp.com"
        >
          <LiveLinkIcon />
          &nbsp;
          Live Website
        </Anchor>
        &nbsp;&nbsp;
        <Anchor
          className="visit-github-btn"
          href="https://github.com/do-kevin/Neverending-Dead"
        >
          <GithubIcon />
          &nbsp;
          GitHub
        </Anchor>
        <Anchor href="https://neverending-dead.herokuapp.com">
          <LargeProjectImage
            src={require("static/images/neverending.png")}
            alt="moodNmusic.png"
          />
        </Anchor>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          About the project
        </h2>
        <HorizontalRule width="200px" />
        <p style={{ textAlign: "left", color: fontColor }}>
          A full-stack web game where players must defeat zombies and reach the final boss. However, these zombies are actually other players who have died in their attempt to reach the final boss. If the player dies, his or her avatar's stats (health and attack ratings) are recorded and pushed into the database; therefore, the player's avatar woul join the army of undead players. This is most compatible with Google Chrome.
          <br /><br />
          This project was Tim Gorodnitski's idea to implement a database as a core gameplay mechanic. I built the project's front end and UI/UX architecture that follows the designs of an old school RPG character creation and turn-based gameplay interface. Moreover, I directed the game's combat mechanics between the player and the enemy. I manually tested the game many times to balance the stat modifiers and game mechanics.
          </p>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          Project Date&nbsp;&nbsp;
            <Anchor
              className="visit-trello-btn"
              href="https://trello.com/b/LNv4noea/project-two"
            >
              <TrelloIcon />
              &nbsp;
              Trello
            </Anchor>
        </h2>
        <HorizontalRule width="139px" />
        <p style={{ textAlign: "left", color: fontColor }}>
          October 4th - October 10th, 2018
        </p>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          Roadblocks
        </h2>
        <HorizontalRule width="135px" />
        <ul style={{ listStyleType: "circle", color: "white", marginLeft: "20px" }}>
          <li>Our character creation was limited due to the difficulty of placing all body parts in their respective positions because they were SVGs.</li>
          <li>The most difficult part of the project was balancing the game as it relies heavily on stat modifiers and chances.</li>
        </ul>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>
          Technical Sheet
        </h2>
        <HorizontalRule width="182px" />
        <section className="technical-sheet">
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
            text="jQuery"
            backgroundColor="hsl(204, 100%, 35%)"
          />
          <TechListItem
            text="JavaScript"
            backgroundColor="hsl(53, 86%, 60%)"
            color="hsl(80, 3%, 20%)"
          />
          <TechListItem
            text="Bulma"
            backgroundColor="hsl(171, 100%, 41%)"
          />
        </section>
        <h2 style={{ fontSize: "24px", color: fontColor, marginTop: h2marginTop }}>Teammates</h2>
        <HorizontalRule width="132px" />
        <section className="teammate-list">
          <TeammateImageLink
            name="Anthony Zheng"
            href="https://github.com/ajz003"
            src={require("static/images/avatars/Anthony.png")}
            alt="Anthony"
          />
          <TeammateImageLink
            name="Karl Seelig"
            href="https://github.com/karlChainBLX"
            src={require("static/images/avatars/Karl.png")} 
            alt="Karl"
          />
          <TeammateImageLink
            name="Tim Gorodnitski"
            href="https://github.com/TimGorodnitski"
            src={require("static/images/avatars/Tim.png")}
            alt="Tim"
          />
        </section>
      </section>
    </main>
  );
}

export default ProjectTwo;
