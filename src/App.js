import React, { Component } from "react";
import anime from "animejs";
import About from "./pages/About";
import ProjectOne from "./pages/ProjectOne";
import "./static/css/App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.aboutPage = null;
    this.animeAboutPage = null;

    this.projectOnePage = null;
    this.animeProjectOnePage = null;

    this.state = {
      aboutPageScaleY: [
        {value: 0, duration: 1200}
      ],
      aboutPageScaleX: [
        {value: 0, duration: 1200}
      ],
      projectOneScaleY: [
        {value: 1, duration: 1200}
      ],
      projectOneScaleX: [
        {value: 1, duration: 1200}
      ]
    };
  }

  componentDidMount() {
    this.anime = anime({
      targets: this.aboutPage,
      scaleY: 1,
      scaleX: 1
    });

    this.anime = anime({
      targets: this.projectOnePage,
      scaleY: 0,
      scaleX: 0
    });
  }
  
  componentDidUpdate() {
    this.anime = anime({
      targets: this.aboutPage,
      scaleY: this.state.aboutPageScaleY,
      scaleX: this.state.aboutPageScaleX
    });

    this.anime = anime({
      targets: this.projectOnePage,
      scaleY: this.state.projectOneScaleY,
      scaleX: this.state.projectOneScaleX
    });
  }

  handleAbout = () => {
    console.log("hit")
    this.setState({
      aboutPageScaleY: [
        {value: 0.02, duration: 2000, delay: 2000},
        {value: 1, duration: 2000}
      ],
      aboutPageScaleX: [
        {value: 0.7, duration: 2000, delay: 2000},
        {value: 1, duration: 1500}
      ],      
      projectOneScaleY: [
        {value: 0.02, duration: 1000, delay: 700},
        {value: 0, duration: 2000}
      ],
      projectOneScaleX: [
        {value: 0.7, duration: 1000, delay: 700},
        {value: 0, duration: 1500}
      ]
    });
  }

  handleProjectOne = () => {
    console.log("hit2")
    this.setState({
      aboutPageScaleY: [
        {value: 0.02, duration: 1000, delay: 700},
        {value: 0, duration: 2000}
      ],
      aboutPageScaleX: [
        {value: 0.7, duration: 1000, delay: 700},
        {value: 0, duration: 1500}
      ],      
      projectOneScaleY: [
        {value: 0.02, duration: 2000, delay: 2000},
        {value: 1, duration: 2000}
      ],
      projectOneScaleX: [
        {value: 0.7, duration: 2000, delay: 2000},
        {value: 1, duration: 1500}
      ]
    });
  }
 
  render() {
    return (
      <div className="App">
        <main 
          ref={main => this.aboutPage = main}
          style={{
            height: "100%", 
            width: "100%", 
            background: "skyblue",
            position: "absolute", 
            top: "0",
            left: "0",
            zIndex: 1
          }}>
            <About
              handleProjectOne={this.handleProjectOne} 
            />
        </main>
        <main 
          ref={main => this.projectOnePage = main}
          style={{
            height: "100%", 
            width: "100%", 
            background: "purple",
            position: "absolute", 
            bottom: "0",
            right: "0"
          }}>
            <ProjectOne 
              handleAbout={this.handleAbout} 
            />
        </main>
      </div>
    );
  }
}

export default App;