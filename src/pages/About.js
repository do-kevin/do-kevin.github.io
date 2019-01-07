import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <main  
        style={{
          minHeight: "1200px",
          background: "#00597b",
          padding: "50px 25px"
      }}>
        <section style={{textAlign: "center"}}>
          <figure className="kevin-container">
              <img className="kevin-pic" src={require("../static/images/avatars/Kevin.png")} alt="Kevin"/>
          </figure>
          <header>
            <span style={{color: "white", fontSize: "10vh"}}>
              Kevin Do
            </span>
          </header>
          <h2 style={{color: "white", fontSize: "4vh", marginTop: 0}}>
            Front-End Engineer
          </h2>
        </section>
        <section style={{textAlign: "center", marginTop: "10px", marginBottom: "50px"}}>
        <a
          className="visit-github-btn"
          href="https://github.com/do-kevin" target="_blank" rel="noreferrer noopener">
          <i className="fab fa-github-alt"></i>&nbsp;GitHub</a>
          &nbsp;&nbsp;
        <a
          className="visit-linkedin-btn"
          href="https://www.linkedin.com/in/kevin-v-do" target="_blank" rel="noreferrer noopener">
          <i className="fab fa-linkedin"></i>&nbsp;LinkedIn</a>
          &nbsp;&nbsp;
        <a
          className="email-btn"
          href="mailto:do.kevin.vo@gmail.com" target="_blank" rel="noreferrer noopener">
          <i className="fas fa-envelope"></i>&nbsp;Email</a>
        &nbsp;&nbsp;
        <br/><br/>
        <a
          className="visit-resume-btn"
          href="https://www.visualcv.com/kevin-do-tech-19" target="_blank" rel="noreferrer noopener">
          <i className="far fa-id-card"></i>&nbsp;Resume <span>online</span></a>&nbsp;&nbsp;
        <a
          className="visit-resume-btn"
          href={require("../documents/Resume-2019.docx")} target="_blank" rel="noreferrer noopener">
          <i className="fas fa-file-alt"></i>&nbsp;Resume <span>.docx</span></a>
          &nbsp;
        </section>
        {/* About me */}
        <header id="hi-header"
          style={{
            textAlign: "center", 
            color: "white"}}>
        Creative and experience-driven, I care deeply about creating beautiful user journeys and delivering performant code</header>
        <div style={{minWidth: "400px", maxWidth: "720px", margin: "auto", marginBottom: "45px"}}>
          <p id="about-info">
            Promotional websites that follow after film or video game trailers have always left me a lasting impression since high school. It wasn't until I earned my B.A. in English at UC Davis and working as a freelance copy editor that my curiosity and interest in web development catalyzed.
            <br/><br/>
            I had copyedited and line edited for a firm's website regarding information about its personal injury practices. While I examined the website, I began to deconstruct it by mapping its navigation, manually testing it for mobile responsiveness and errors. This experience led me to provide UI/UX suggestions on top of the edits for the web developers.
            <br/><br/>
            From there, I ventured to complete UCLA's full-stack coding bootcamp. Building websites with others under a short amount of time has given me a certain hunger. It was thrilling, creative, intense, and fun. I want to digest new technologies and implement them to build websites that will improve people's lives or provide a transcendent experience.

            I aim to join the internet and information technology industries, understand client's needs and goals, and bring concepts into reality.
          </p>
        </div>
        <header style={{
          textAlign: "center", 
          color: "white", 
          fontSize: "10vh"}}>
        Projects</header>
        <section id="showcase-projects">
            <figure className="project-showcase-container">
              <div>
                <h1>Mood & Music</h1>
                <img
                  onClick={this.props.handleProjectOne}
                  src={require("../static/images/moodNmusic.png")} alt="moodNmusic.png"/>
                <p><i className="fas fa-hand-point-up"></i></p>
              </div>
            </figure>
            <figure className="project-showcase-container">
            <div>
                <h1>The Neverending Dead</h1>
              <img
                onClick={this.props.handleProjectTwo}
                src={require("../static/images/neverending.png")} alt="moodNmusic.png"/>
                <p><i className="fas fa-hand-point-up"></i></p>
              </div>
            </figure>
            <figure className="project-showcase-container">
            <div>
                <h1>Zephyr Node</h1>
              <img
                onClick={this.props.handleProjectThree}
                src={require("../static/images/zephyrnode.png")} alt="zephyrnode.png"/>
                <p><i className="fas fa-hand-point-up"></i></p>
              </div>
            </figure>
        </section>
      </main>
    );
  }
}

export default About;