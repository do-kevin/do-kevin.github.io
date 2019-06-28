import React from "react";
import { ProjectShowcase } from "components/layout";
import { 
  GithubIcon,
  LinkedinIcon,
  EmailIcon,
  ResumeIcon,
} from "components/Icons";

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
        background: "#00597b",
        padding: "50px 25px"
      }}>
      <section style={{ textAlign: "center" }}>
        <figure className="kevin-container">
          <img className="kevin-pic" src={require("../static/images/avatars/Kevin.png")} alt="Kevin" />
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
          <a
            className="visit-github-btn"
            href="https://github.com/do-kevin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon />
            &nbsp;GitHub
          </a>
          &nbsp;&nbsp;
          <a
            className="visit-linkedin-btn"
            href="https://www.linkedin.com/in/kevin-v-do"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedinIcon />
            &nbsp;LinkedIn
          </a>
          &nbsp;&nbsp;
            <a
              className="email-btn"
              href="mailto:do.kevin.vo@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
            <EmailIcon />
            &nbsp;Email
            </a>
        </div>
        &nbsp;&nbsp;
        <br /><br />
        <div className="resume-btns-container">
          {/* 
            <a
              className="visit-resume-btn"
              href="https://www.visualcv.com/kevin-do-tech-19"
              target="_blank"
              rel="noreferrer noopener">
              <OnlineResumeIcon />&nbsp;Resume <span>online</span>
            </a>
            &nbsp;&nbsp;
          */}
          <a
            className="visit-resume-btn"
            href={require("../documents/Kevin-Do-Resume-June2019.docx")}
            target="_blank"
            rel="noreferrer noopener">
            <ResumeIcon />&nbsp;Resume
            {/* <span>.docx</span> */}
          </a>
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
              src={require("../static/images/MHW-Builder-social.png")} alt="MHW Builder screenshot" />
            <section
              className="project-content"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "75px",
              }}
            >
              <a
                className="project-content__github-btn"
                href="https://github.com/do-kevin/monster-hunter-world-builder/tree/meta-data-and-other"
                target="_blank" rel="noreferrer noopener"
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
                <i className="fab fa-github-alt"></i>
              </a>
            </section>
          </div>
        </figure>
        <ProjectShowcase
          title="Zephyr Node"
          src={require("../static/images/zephyrnode.png")}
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
          src={require("../static/images/moodNmusic.png")}
          alt="moodNmusic.png"
          githubLinkHref="https://github.com/do-kevin/Mood-and-Music"
          detailsOnClick={() => handleProjectOne()}
          liveLinkHref="https://do-kevin.github.io/Mood-and-Music"
        />
        {/* Project gap */}
        <ProjectShowcase
          title="The Neverending Dead"
          src={require("../static/images/neverending.png")}
          alt="Neverending.png"
          githubLinkHref="https://github.com/do-kevin/Neverending-Dead"
          detailsOnClick={() => handleProjectTwo()}
          liveLinkHref="https://neverending-dead.herokuapp.com"
        />
      </section>
      <section style={{ margin: "75px auto 15px", maxWidth: "557px" }}>
        <h2 style={{ color: "white", margin: "auto", width: "277px", fontSize: "16px" }}>This portfolio website is powered by</h2>
        <section className="technical-sheet" style={{ margin: "auto" }}>
          <div className="technical-list-item" style={{ backgroundColor: "#282c33", color: "#5adafd" }}>React</div>
          <div className="technical-list-item" style={{ backgroundColor: "#f1db3f", color: "#323330" }}>JavaScript</div>
          <div className="technical-list-item" style={{ backgroundColor: "#252423", color: "#f35052" }}>Anime.js</div>
          <div className="technical-list-item" style={{ backgroundColor: "#c4558c" }}>SASS</div>
          <div className="technical-list-item" style={{ backgroundColor: "#00d2b2" }}>Bulma</div>
          <div className="technical-list-item" style={{ backgroundColor: "#fc6721" }}>CSS3</div>
          <div className="technical-list-item">HTML5</div>
        </section>
      </section>
    </main>
  );
}

export default About;