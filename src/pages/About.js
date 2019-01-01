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
          href="https://www.visualcv.com/kevin-do-tech-18" target="_blank" rel="noreferrer noopener">
          <i className="far fa-id-card"></i>&nbsp;Resume <span>online</span></a>&nbsp;&nbsp;
        <a
          className="visit-resume-btn"
          href={require("../documents/resume.docx")} target="_blank" rel="noreferrer noopener">
          <i className="fas fa-file-alt"></i>&nbsp;Resume <span>.docx</span></a>
          &nbsp;
        </section>
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
        {/* About me */}
        <header id="hi-header"
          style={{
            textAlign: "center", 
            color: "white"}}>
        Creative and experience-driven, I care deeply about creating beautiful user journeys and delivering performant code</header>
        <div style={{minWidth: "400px", maxWidth: "720px", margin: "auto"}}>
          <p id="about-info">
            Watching trailers for films and videogames is a habit of mine since high school. The promotional websites, such as Prometheus (Weyland Industries), Deus Ex universe or Star Wars franchise, that accompanied the trailers have left me a lasting impression. It wasn't until I earned my B.A. in English at UC Davis and my first job as a copy editor that my curiosity and interest in web development catalyzed.
            <br/><br/>
            I was tasked with copyeditng and line editing a firm's website regarding information about its personal injury practices. I began to deconstruct the website and manually test it for mobile responsiveness, navigation errors and other technical issues, which led me to think about the user experience. I provided not just edits but also UI/UX suggestions to the web developers who had made the site. 
            <br/><br/>
            This experience led me to take UCLA Extension's full-stack coding bootcamp. The course has taught me to be self-reliant and adaptive to new technologies. My collaboration with others to create projects under a short span of time was thrilling and fun.
            <br/><br/> 
            I strive to expand upon my skills and help create websites that provide a smooth and/or unqiue user experience while making sure they're maintainable for future development.
          </p>
        </div>
      </main>
    );
  }
}

export default About;