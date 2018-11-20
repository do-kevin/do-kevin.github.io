import React, { Component } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

// Pages
import About from "./pages/About";

import projects from "./portfolio.json";

import "./css/App.css";

let projectNum = projects.length * 1000;

class App extends Component {
  state = {
    currentPage: "portfolio",
    showcaseAnimations: "animated rollIn",
    aboutAnimations: "",
    lastCardAnimation: "animated rollIn",
    horizontalOrNot: false
  };

  componentDidMount(){
    window.addEventListener("resize", this.horizontalCardToNorm);
  }

  horizontalCardToNorm = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1200) {
      this.setState({ horizontalOrNot: true });
    } else if(window.innerWidth > 1200) {
      this.setState({ horizontalOrNot: false });
    }
  }

  handleAbout = () => {
    setTimeout(() => {this.setState({currentPage: "about"})}, 700 + projectNum)
    clearTimeout(setTimeout(() => {this.setState({currentPage: "portfolio"})}, projectNum));
    this.setState({ 
      showcaseAnimations: "animated hinge",
      aboutAnimations: "animated zoomInDown" ,
      lastCardAnimation: "animated fadeOut" 
    });
    document.querySelector("#right-menu-item").setAttribute("disabled", "");
    document.querySelector("#left-menu-item").setAttribute("disabled", "");
    setTimeout(() => {
      document.querySelector("#right-menu-item").removeAttribute("disabled")
    }, 100 + projectNum)
  };

  handlePortfolio = () => {
    setTimeout(() => {this.setState({currentPage: "portfolio"})}, projectNum - 3000)
    clearTimeout(setTimeout(() => {this.setState({currentPage: "about"})}, 2000 + projectNum));
    this.setState({ 
      showcaseAnimations: "animated rollIn",
      aboutAnimations: "animated zoomOutUp",
      lastCardAnimation: "animated rollIn" 
    });
    document.querySelector("#left-menu-item").setAttribute("disabled", "");
    document.querySelector("#right-menu-item").setAttribute("disabled", "");
    setTimeout(() => {
      document.querySelector("#left-menu-item").removeAttribute("disabled")
    }, projectNum - 400)
  };

  render() {
    console.log(projects.length)

    let page;

    if (this.state.currentPage === "portfolio" && this.state.horizontalOrNot === false) {
      
      page = (
        <div style={{paddingBottom: "200px"}}>
            <ProjectCard
              key={projects[0].id}
              animateClassNames={this.state.showcaseAnimations}
              name={projects[0].name}
              image={require("./static/images/moodNmusic.png")}
              description={projects[0].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
                <a href="https://github.com/JSR88431" rel="noreferrer noopener" target="_blank">Josephson Reynoso</a><br/>
                <a href="https://github.com/ironaidan" rel="noreferrer noopener" target="_blank">Aidan Nemeth</a>
              </div>}
              github={projects[0].github}
              live={projects[0].live}
            />
            <ProjectCard
              key={projects[1].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-1300ms`}
              name={projects[1].name}
              image={require("./static/images/neverending.png")}
              description={projects[1].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
                <a href="https://github.com/TimGorodnitski" rel="noreferrer noopener" target="_blank">Tim Gorodnitski</a><br/>
                <a href="https://github.com/ajz003" rel="noreferrer noopener" target="_blank">Anthony Zheng</a><br/>
                <a href="https://github.com/karlChainBLX" rel="noreferrer noopener" target="_blank">Karl Seelig</a>
              </div>}
              github={projects[1].github}
              live={projects[1].live}
            />
            <ProjectCard
              key={projects[2].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-2500ms`}
              name={projects[2].name}
              image={require("./static/images/zephyrnode.png")}
              description={projects[2].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
                <a href="https://github.com/aparakaki" rel="noreferrer noopener" target="_blank">Ana Arakaki</a><br/>
                <a href="https://github.com/pauline-ann" rel="noreferrer noopener" target="_blank">Pauline Bantayan</a><br/>
                <a href="https://github.com/chrisArmo" rel="noreferrer noopener" target="_blank">Chris Armendarez</a>
              </div>}
              github={projects[2].github}
              live={projects[2].live}
            />
            <ProjectCard
              key={projects[3].id}
              animateClassNames={`${this.state.lastCardAnimation} delay-4s short-showcase`}
              name={projects[3].name}
              image={require("./static/images/memorygame.png")}
              description={projects[3].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
              </div>}
              github={projects[3].github}
              live={projects[3].live}
            />
            <ProjectCard
              key={projects[4].id}
              animateClassNames={`${this.state.lastCardAnimation} delay-5s short-showcase`}
              name={projects[4].name}
              image={require("./static/images/nprscraper.png")}
              description={projects[4].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
              </div>}
              github={projects[4].github}
              live={projects[4].live}
            />
        </div>
      );
    } else if (this.state.currentPage === "portfolio" && this.state.horizontalOrNot === true) {
      page = (
        <div style={{paddingBottom: "200px"}}>
          <div className="columns" style={{ margin: "auto", width: "95%" }}>
            <ProjectCard
              key={projects[0].id}
              animateClassNames={this.state.showcaseAnimations}
              name={projects[0].name}
              image={require("./static/images/moodNmusic.png")}
              description={projects[0].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
                <a href="https://github.com/JSR88431" rel="noreferrer noopener" target="_blank">Josephson Reynoso</a><br/>
                <a href="https://github.com/ironaidan" rel="noreferrer noopener" target="_blank">Aidan Nemeth</a>
              </div>}
              github={projects[0].github}
              live={projects[0].live}
            />
            <ProjectCard
              key={projects[1].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-1300ms`}
              name={projects[1].name}
              image={require("./static/images/neverending.png")}
              description={projects[1].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
                <a href="https://github.com/TimGorodnitski" rel="noreferrer noopener" target="_blank">Tim Gorodnitski</a><br/>
                <a href="https://github.com/ajz003" rel="noreferrer noopener" target="_blank">Anthony Zheng</a><br/>
                <a href="https://github.com/karlChainBLX" rel="noreferrer noopener" target="_blank">Karl Seelig</a>
              </div>}
              github={projects[1].github}
              live={projects[1].live}
            />
            <ProjectCard
              key={projects[2].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-2500ms`}
              name={projects[2].name}
              image={require("./static/images/zephyrnode.png")}
              description={projects[2].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
                <a href="https://github.com/JSR88431" rel="noreferrer noopener" target="_blank">Josephson Reynoso</a><br/>
                <a href="https://github.com/ironaidan" rel="noreferrer noopener" target="_blank">Aidan Nemeth</a>
              </div>}
              github={projects[2].github}
              live={projects[2].live}
            />
          </div>
          <div className="columns" style={{ margin: "auto", width: "95%" }}>
          <ProjectCard
              key={projects[3].id}
              animateClassNames={`${this.state.lastCardAnimation} delay-4s short-showcase`}
              name={projects[3].name}
              image={require("./static/images/memorygame.png")}
              description={projects[3].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
              </div>}
              github={projects[3].github}
              live={projects[3].live}
            />
            <ProjectCard
              key={projects[4].id}
              animateClassNames={`${this.state.lastCardAnimation} delay-5s short-showcase`}
              name={projects[4].name}
              image={require("./static/images/nprscraper.png")}
              description={projects[4].description}
              developers={<div>
                <a href="https://github.com/do-kevin" rel="noreferrer noopener" target="_blank">Kevin Do</a><br/>
              </div>}
              github={projects[4].github}
              live={projects[4].live}
            />    
            </div>
        </div>
      );
    } else if (this.state.currentPage === "about") {
      page = <About 
                aboutAnimateClassNames={this.state.aboutAnimations}
              />;
    }

    return (
      <div className="app">
        <Navbar
          clickedAbout={this.handleAbout}
          clickedPortfolio={this.handlePortfolio}
        />
        {page}
        <Footer/>
      </div>
    );
  }
}

export default App;
