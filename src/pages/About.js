import React from "react";
import { ProjectShowcase } from "components/layout";
import {
  GithubIcon,
  LinkedinIcon,
  EmailIcon,
  ResumeIcon,
} from "components/Icons";
import TechListItem from "components/TechListItem";
import Anchor from "components/Anchor";
import Resume from "documents/kevindo_resume_march2020.docx";

function About(props) {
  const {
    handleProjectOne,
    handleProjectTwo,
    handleProjectThree,
  } = props;

  return (
    <main
      style={{
        minHeight: "1200px",
        background: "hsl(197, 100%, 24%)",
        padding: "50px 25px"
      }}>
      <section style={{ textAlign: "center" }}>
        <figure className="kevin-container">
          <img className="kevin-pic" src={require("static/images/avatars/Kevin.png")} alt="Kevin" />
        </figure>
        <header className="noselect" style={{ height: "100px" }}>
          <span className="my-name">
            Kevin Do
          </span>
        </header>
        <h2 className="my-title noselect">
          Front-End Engineer
        </h2>
      </section>
      <section className="ext-links-container">
        <div className="ext-links-container__block">
          <Anchor
            className="visit-github-btn"
            href="https://github.com/do-kevin"
          >
            <GithubIcon />
            &nbsp;
            GitHub
          </Anchor>
          &nbsp;&nbsp;
          <Anchor
            className="visit-linkedin-btn"
            href="https://www.linkedin.com/in/kevin-v-do"
          >
            <LinkedinIcon />
            &nbsp;
            LinkedIn
          </Anchor>
          &nbsp;&nbsp;
          <Anchor
            className="email-btn"
            href="mailto:do.kevin.vo@gmail.com"
          >
            <EmailIcon />
            &nbsp;
            Email
          </Anchor>
        </div>
        &nbsp;&nbsp;
        <br /><br />
        <div className="resume-btns-container">
          {/* <Anchor
            className="visit-resume-btn"
            href="https://www.visualcv.com/kevin-do-tech-19"
          >
            <OnlineResumeIcon />&nbsp;Resume <span>online</span>
          </Anchor>
          &nbsp;&nbsp; */}
          <Anchor
            className="visit-resume-btn"
            href={Resume}
          >
            <ResumeIcon />&nbsp;Resume
            {/* <span>.docx</span> */}
          </Anchor>
        </div>
        &nbsp;
        </section>
      {/* About me */}
      <header id="hi-header"
        style={{
          textAlign: "center",
          color: "white"
        }}>
        Creative and experience-driven, I care deeply about creating beautiful user journeys and delivering performant code</header>
      <div style={{ minWidth: "320px", maxWidth: "720px", margin: "auto", marginBottom: "45px" }}>
        <p id="about-info">
          Promotional websites that follow after film or video game trailers have always left me a lasting impression since high school. It wasn't until I earned my B.A. in English at UC Davis and working as a freelance copy editor that my curiosity and interest in web development catalyzed.
            <br /><br />
          I had copyedited and line edited for a firm's website regarding information about its personal injury practices. While I examined the website, I began to deconstruct it by mapping its navigation, manually testing it for mobile responsiveness and errors. This experience led me to provide UI/UX suggestions on top of the edits for the web developers.
            <br /><br />
          From there, I ventured to complete UCLA's full-stack coding bootcamp. Building websites with others under a short amount of time has given me a certain hunger. It was thrilling, creative, intense, and fun. I want to digest new technologies and implement them to build websites that will improve people's lives or provide a transcendent experience.
            <br /><br />
          I am a design thinker and problem solver that aims to provide enriching user experiences in the Internet and information industries.
          </p>
      </div>
      <header className="project-headers-one noselect" style={{
        textAlign: "center",
        color: "white"
      }}>
        Featured Projects</header>
      <section className="showcase-projects">
        <figure className="project-showcase-container">
          <div>
            <h1>Monster Hunter World Builder</h1>
            <img
              src={require("static/images/MHW-Builder-social.png")} alt="MHW Builder screenshot" />
            <section
              className="project-content"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "75px",
              }}
            >
              <Anchor
                className="project-content__github-btn"
                href="https://github.com/do-kevin/monster-hunter-world-builder/tree/meta-data-and-other"
                style={{
                  // width: "100px",
                  display: "flex",
                  flexGrow: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  margin: "27px",
                }}
              >
                <GithubIcon />
              </Anchor>
            </section>
          </div>
        </figure>
        <ProjectShowcase
          title="Zephyr Node"
          src={require("static/images/zephyrnode.png")}
          alt="zephyrnode.png"
          githubLinkHref="https://github.com/do-kevin/Zephyr-Node"
          detailsOnClick={() => handleProjectThree()}
          liveLinkHref="https://zephyr-node.herokuapp.com"
        />
      </section>
      <header className="project-headers-two noselect" style={{
        textAlign: "center",
        color: "white"
      }}>
        Other Projects</header>
      <section className="showcase-projects">
        <ProjectShowcase
          title="Mood & Music"
          src={require("static/images/moodNmusic.png")}
          alt="moodNmusic.png"
          githubLinkHref="https://github.com/do-kevin/Mood-and-Music"
          detailsOnClick={() => handleProjectOne()}
          liveLinkHref="https://do-kevin.github.io/Mood-and-Music"
        />
        {/* Project gap */}
        <ProjectShowcase
          title="The Neverending Dead"
          src={require("static/images/neverending.png")}
          alt="Neverending.png"
          githubLinkHref="https://github.com/do-kevin/Neverending-Dead"
          detailsOnClick={() => handleProjectTwo()}
          liveLinkHref="https://neverending-dead.herokuapp.com"
        />
      </section>
      <section style={{ margin: "75px auto 15px", maxWidth: "557px" }}>
        <h2 style={{ color: "white", margin: "auto", width: "277px", fontSize: "16px" }}>This portfolio website is powered by</h2>
        <section className="technical-sheet" style={{ margin: "auto" }}>
          <TechListItem
            text="React"
            backgroundColor="hsl(218, 12%, 18%)"
            color="hsl(193, 98%, 67%)"
          />
          <TechListItem
            text="JavaScript"
            backgroundColor="hsl(53, 86%, 60%)"
            color="hsl(80, 3%, 20%)"
          />
          <TechListItem
            text="Anime.js"
            backgroundColor="hsl(30, 3%, 14%)"
            color="hsl(359, 87%, 64%)"
          />
          <TechListItem
            text="SASS"
            backgroundColor="hsl(330, 49%, 55%)"
          />
          <TechListItem
            text="Bulma"
            backgroundColor="hsl(171, 100%, 41%)"
          />
          <TechListItem
            text="CSS3"
            backgroundColor="hsl(19, 97%, 56%)"
          />
          <TechListItem text="HTML5" />
        </section>
      </section>
    </main>
  );
}

export default About;
