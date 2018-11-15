import React, { Component } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

// Pages
import About from "./pages/About";

import projects from "./portfolio.json";

import "./css/App.css";

class App extends Component {
  state = {
    currentPage: "portfolio",
    showcaseAnimations: "animated rollIn",
    aboutAnimations: "animated slideInRight"
  };

  handleAbout = () => {
    setTimeout(() => {this.setState({currentPage: "about"})}, 4000)
    clearTimeout(setTimeout(() => {this.setState({currentPage: "portfolio"})}, 3000));
    this.setState({ 
      showcaseAnimations: "animated hinge",
      aboutAnimations: "animated slideInRight"  
    });
    document.querySelector("#right-menu-item").setAttribute("disabled", "");
    document.querySelector("#left-menu-item").setAttribute("disabled", "");
    setTimeout(() => {
      document.querySelector("#right-menu-item").removeAttribute("disabled")
    }, 4100)
  };

  handlePortfolio = () => {
    setTimeout(() => {this.setState({currentPage: "portfolio"})}, 2500)
    clearTimeout(setTimeout(() => {this.setState({currentPage: "about"})}, 5000));
    this.setState({ 
      showcaseAnimations: "animated rollIn",
      aboutAnimations: "animated slideOutLeft" 
    });
    document.querySelector("#left-menu-item").setAttribute("disabled", "");
    document.querySelector("#right-menu-item").setAttribute("disabled", "");
    setTimeout(() => {
      document.querySelector("#left-menu-item").removeAttribute("disabled")
    }, 2600)
  };

  render() {
    let page;

    if (this.state.currentPage === "portfolio") {
      
      page = (
        <div>
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
              key={projects[0].id}
              animateClassNames={`${this.state.showcaseAnimations} delay-3s`}
              name={projects[0].name}
              image={require("./static/images/moodNmusic.png")}
              description={projects[0].description}
              github={projects[0].github}
              live={projects[0].live}
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
        <Footer />
      </div>
    );
  }
}

export default App;
