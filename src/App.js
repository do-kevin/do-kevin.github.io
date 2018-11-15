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
    aboutAnimations: "animated slideInRight",
    lastCardAnimation: "animated rollIn",
    horizontalOrNot: false
  };

  componentDidMount(){
    window.addEventListener("resize", this.horizontalCardToNorm);
  }

  horizontalCardToNorm = () => {
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
      aboutAnimations: "animated slideInRight" ,
      lastCardAnimation: "animated slideOutRight" 
    });
    document.querySelector("#right-menu-item").setAttribute("disabled", "");
    document.querySelector("#left-menu-item").setAttribute("disabled", "");
    setTimeout(() => {
      document.querySelector("#right-menu-item").removeAttribute("disabled")
    }, 100 + projectNum)
  };

  handlePortfolio = () => {
    setTimeout(() => {this.setState({currentPage: "portfolio"})}, projectNum - 500)
    clearTimeout(setTimeout(() => {this.setState({currentPage: "about"})}, 2000 + projectNum));
    this.setState({ 
      showcaseAnimations: "animated rollIn",
      aboutAnimations: "animated slideOutLeft",
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
              github={projects[0].github}
              live={projects[0].live}
            />
            <ProjectCard
              key={projects[1].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-1300ms`}
              name={projects[1].name}
              image={require("./static/images/neverending.png")}
              description={projects[1].description}
              github={projects[1].github}
              live={projects[1].live}
            />
            <ProjectCard
              key={projects[2].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-2500ms`}
              name={projects[2].name}
              image={require("./static/images/flashme.png")}
              description={projects[2].description}
              github={projects[2].github}
              live={projects[2].live}
            />
            <ProjectCard
              key={projects[3].id}
              animateClassNames={`${this.state.lastCardAnimation} delay-4s`}
              name={projects[3].name}
              image={require("./static/images/memorygame.png")}
              description={projects[3].description}
              github={projects[3].github}
              live={projects[3].live}
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
              github={projects[0].github}
              live={projects[0].live}
            />
            <ProjectCard
              key={projects[1].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-1300ms`}
              name={projects[1].name}
              image={require("./static/images/neverending.png")}
              description={projects[1].description}
              github={projects[1].github}
              live={projects[1].live}
            />
            <ProjectCard
              key={projects[2].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-2500ms`}
              name={projects[2].name}
              image={require("./static/images/flashme.png")}
              description={projects[2].description}
              github={projects[2].github}
              live={projects[2].live}
            />
          </div>
          <div className="columns" style={{ margin: "auto", width: "95%" }}>
          <ProjectCard
              key={projects[3].id}
              animateClassNames={`${this.state.lastCardAnimation} delay-4s`}
              name={projects[3].name}
              image={require("./static/images/memorygame.png")}
              description={projects[3].description}
              github={projects[3].github}
              live={projects[3].live}
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
