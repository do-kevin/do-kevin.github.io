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
          <header className="noselect" style={{ height: "100px"}}>
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
          </div>
          &nbsp;&nbsp;
        <br/><br/>
        <div className="resume-btns-container">
          <a
            className="visit-resume-btn"
            href="https://www.visualcv.com/kevin-do-tech-19" target="_blank" rel="noreferrer noopener">
            <i className="far fa-id-card"></i>&nbsp;Resume <span>online</span></a>&nbsp;&nbsp;
          <a
            className="visit-resume-btn"
            href={require("../documents/Kevin-Do-General-Resume-2019.docx")} target="_blank" rel="noreferrer noopener">
            <i className="fas fa-file-alt"></i>&nbsp;Resume <span>.docx</span></a>
        </div>
          &nbsp;
        </section>
        {/* About me */}
        <header id="hi-header"
          style={{
            textAlign: "center", 
            color: "white"}}>
        Creative and experience-driven, I care deeply about creating beautiful user journeys and delivering performant code</header>
        <div style={{minWidth: "320px", maxWidth: "720px", margin: "auto", marginBottom: "45px"}}>
          <p id="about-info">
            Promotional websites that follow after film or video game trailers have always left me a lasting impression since high school. It wasn't until I earned my B.A. in English at UC Davis and working as a freelance copy editor that my curiosity and interest in web development catalyzed.
            <br/><br/>
            I had copyedited and line edited for a firm's website regarding information about its personal injury practices. While I examined the website, I began to deconstruct it by mapping its navigation, manually testing it for mobile responsiveness and errors. This experience led me to provide UI/UX suggestions on top of the edits for the web developers.
            <br/><br/>
            From there, I ventured to complete UCLA's full-stack coding bootcamp. Building websites with others under a short amount of time has given me a certain hunger. It was thrilling, creative, intense, and fun. I want to digest new technologies and implement them to build websites that will improve people's lives or provide a transcendent experience.
            <br/><br/>          
            I am a design thinker and problem solver that aims to provide enriching user experiences in the Internet and information industries.
          </p>
        </div>
        {/* <div id="stripes">
          <div id="instructions">
            Click on a project tab to see its details  <i className="fas fa-hand-point-up" style={{
              fontSize: "2.4vh",
              transform: "rotate(-45deg)"
            }}></i>
          </div>
        </div> */}
        <header className="noselect" style={{
          textAlign: "center", 
          color: "white", 
          fontSize: "10vh"}}>
        Featured Project</header>
        <section className="showcase-projects">
            <figure className="project-showcase-container">
            <div>
                <h1>Zephyr Node</h1>
              <img
                src={require("../static/images/zephyrnode.png")} alt="zephyrnode.png"/>
                <section className="project-content">
                    <a 
                      className="project-content__github-btn" 
                      href="https://github.com/do-kevin/Zephyr-Node" 
                      target="_blank" rel="noreferrer noopener"><i className="fab fa-github-alt"></i></a>
                    <button 
                      className="project-content__details-btn"
                      onClick={this.props.handleProjectThree}
                      ><span>Details</span></button>
                    <a 
                      className="project-content__live-btn" 
                      href="https://zephyr-node.herokuapp.com" 
                      target="_blank" rel="noreferrer noopener"><i className="fas fa-external-link-square-alt"></i></a>
                </section>
              </div>
            </figure>
        </section>
        <header className="noselect" style={{
          textAlign: "center", 
          color: "white", 
          fontSize: "10vh"}}>
        Other Projects</header>
        <section className="showcase-projects">
            <figure className="project-showcase-container">
              <div>
                <h1>Mood & Music</h1>
                <img
                  src={require("../static/images/moodNmusic.png")} alt="moodNmusic.png"/>
                  <section className="project-content">
                    <a 
                      className="project-content__github-btn" 
                      href="https://github.com/do-kevin/Mood-and-Music" 
                      target="_blank" rel="noreferrer noopener"><i className="fab fa-github-alt"></i></a>
                    <button 
                      className="project-content__details-btn"
                      onClick={this.props.handleProjectOne}
                      ><span>Details</span></button>
                    <a 
                      className="project-content__live-btn" 
                      href="https://do-kevin.github.io/Mood-and-Music" 
                      target="_blank" rel="noreferrer noopener"><i className="fas fa-external-link-square-alt"></i></a>
                </section>
              </div>
            </figure>
            {/* Project gap */}
            <figure className="project-showcase-container">
              <div>
                <h1>The Neverending Dead</h1>
                <img
                  src={require("../static/images/neverending.png")} alt="moodNmusic.png"/>
                  <section className="project-content">
                      <a 
                        className="project-content__github-btn" 
                        href="https://github.com/do-kevin/Neverending-Dead" 
                        target="_blank" rel="noreferrer noopener"><i className="fab fa-github-alt"></i></a>
                      <button 
                        className="project-content__details-btn"
                        onClick={this.props.handleProjectTwo}
                        ><span>Details</span></button>
                      <a 
                        className="project-content__live-btn" 
                        href="https://neverending-dead.herokuapp.com" 
                        target="_blank" rel="noreferrer noopener"><i className="fas fa-external-link-square-alt"></i></a>
                  </section>
              </div>
            </figure>
        </section>
        <section style={{margin: "75px auto 15px", maxWidth: "557px"}}>
          <h2 style={{color: "white", margin: "auto", width: "305px", fontSize: "2.25vh"}}>This portfolio website is powered by</h2>
          <section className="technical-sheet" style={{margin: "auto"}}>
              <div className="technical-list-item" style={{backgroundColor: "#282c33", color: "#5adafd"}}>React</div>
              <div className="technical-list-item" style={{backgroundColor: "#f1db3f", color: "#323330"}}>JavaScript</div>
              <div className="technical-list-item" style={{backgroundColor: "#252423", color: "#f35052"}}>Anime.js</div>
              <div className="technical-list-item" style={{backgroundColor: "#c4558c"}}>SASS</div>
              <div className="technical-list-item" style={{backgroundColor: "#00d2b2"}}>Bulma</div>
              <div className="technical-list-item" style={{backgroundColor: "#fc6721"}}>CSS3</div>
              <div className="technical-list-item">HTML5</div>
          </section>
        </section>
      </main>
    );
  }
}

export default About;