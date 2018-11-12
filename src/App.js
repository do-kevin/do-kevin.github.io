import React, { Component } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

import projects from "./portfolio.json";

import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="columns" style={{margin: "auto", width: "95%"}}>
          <ProjectCard
            key={projects[0].id}
            name={projects[0].name}
            image={require("./static/images/moodNmusic.png")}
            description={projects[0].description}
            github={projects[0].github}
            live={projects[0].live}
          />
          <ProjectCard
            key={projects[1].id}
            name={projects[1].name}
            image={require("./static/images/neverending.png")}
            description={projects[1].description}
            github={projects[1].github}
            live={projects[1].live}
          />
          <ProjectCard
            key={projects[2].id}
            name={projects[2].name}
            image={require("./static/images/flashme.png")}
            description={projects[2].description}
            github={projects[2].github}
            live={projects[2].live}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
