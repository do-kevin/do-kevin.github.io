import React, { Component } from "react";
import anime from "animejs";
import About from "./pages/About";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import Footer from "./components/Footer";
import "./static/css/App.css";
import "bulma";

class App extends Component {

  constructor(props) {
    super(props);

    this.aboutPage = null;
    this.animeAboutPage = null;

    this.projectOnePage = null;
    this.animeProjectOnePage = null;

    this.projectTwoPage = null;
    this.animeProjectTwoPage = null;

    this.projectThreePage = null;
    this.animeProjectThreePage = null;

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
      ],
      projectTwoScaleY: [
        {value: 1, duration: 1200}
      ],
      projectTwoScaleX: [
        {value: 1, duration: 1200}
      ],
      projectThreeScaleY: [
        {value: 1, duration: 1200}
      ],
      projectThreeScaleX: [
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

    this.anime = anime({
      targets: this.projectTwoPage,
      scaleY: 0,
      scaleX: 0
    });

    this.anime = anime({
      targets: this.projectThreePage,
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

    this.anime = anime({
      targets: this.projectTwoPage,
      scaleY: this.state.projectTwoScaleY,
      scaleX: this.state.projectTwoScaleX
    });

    this.anime = anime({
      targets: this.projectThreePage,
      scaleY: this.state.projectThreeScaleY,
      scaleX: this.state.projectThreeScaleX
    });
  }

  handleAbout = () => {
    console.log("Opening About")
    this.setState({
      // Open About
      aboutPageScaleY: [
        {value: 0.02, duration: 1500, delay: 2000},
        {value: 1, duration: 1500}
      ],
      aboutPageScaleX: [
        {value: 0.7, duration: 1500, delay: 2000},
        {value: 1, duration: 1000}
      ],     
      // Close Mood and Music 
      projectOneScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectOneScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],
      // Close Neverending Dead
      projectTwoScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectTwoScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],
      // Close Zephyr Node
      projectThreeScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectThreeScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ]
    });
  }

  handleProjectOne = () => {
    console.log("Opening Project One")
    this.setState({
      // Close About
      aboutPageScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      aboutPageScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],     
      // Open Music and Mood 
      projectOneScaleY: [
        {value: 0.02, duration: 1500, delay: 2000},
        {value: 1, duration: 1500}
      ],
      projectOneScaleX: [
        {value: 0.7, duration: 1500, delay: 2000},
        {value: 1, duration: 1000}
      ],
      // Close Neverending Dead
      projectTwoScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectTwoScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],
      // Close Zephyr Node
      projectThreeScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectThreeScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ]
    });
  }

  handleProjectTwo = () => {
    console.log("Opening Project Two")
    this.setState({
      // Close About
      aboutPageScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      aboutPageScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],     
      // Close Music and Mood 
      projectOneScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectOneScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],
      // Open Neverending Dead
      projectTwoScaleY: [
        {value: 0.02, duration: 1500, delay: 2000},
        {value: 1, duration: 1500}
      ],
      projectTwoScaleX: [
        {value: 0.7, duration: 1500, delay: 2000},
        {value: 1, duration: 1000}
      ],
      // Close Zephyr Node
      projectThreeScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectThreeScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ]
    });
  }

  handleProjectThree = () => {
    console.log("Opening Project Three")
    this.setState({
      // Close About
      aboutPageScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      aboutPageScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],     
      // Close Music and Mood 
      projectOneScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectOneScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],
      // Close Neverending Dead
      projectTwoScaleY: [
        {value: 0.02, duration: 500, delay: 700},
        {value: 0, duration: 1500}
      ],
      projectTwoScaleX: [
        {value: 0.7, duration: 500, delay: 700},
        {value: 0, duration: 1000}
      ],
      // Open Zephyr Node
      projectThreeScaleY: [
        {value: 0.02, duration: 1500, delay: 2000},
        {value: 1, duration: 1500}
      ],
      projectThreeScaleX: [
        {value: 0.7, duration: 1500, delay: 2000},
        {value: 1, duration: 1000}
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
            position: "absolute", 
            top: "-7px",
            left: "0",
            zIndex: 1
          }}>
            <About
              handleProjectOne={this.handleProjectOne}
              handleProjectTwo={this.handleProjectTwo}
              handleProjectThree={this.handleProjectThree}   
            />
            <Footer />
        </main>
        <main 
          ref={main => this.projectOnePage = main}
          style={{
            height: "100%", 
            width: "100%",
            position: "absolute", 
            bottom: "0",
            right: "0"
          }}>
            <ProjectOne 
              handleAbout={this.handleAbout}
              handleProjectTwo={this.handleProjectTwo} 
              handleProjectThree={this.handleProjectThree} 
            />
            <Footer />
        </main>
        <main 
          ref={main => this.projectTwoPage = main}
          style={{
            height: "100%", 
            width: "100%",
            position: "absolute", 
            bottom: "0",
            right: "0"
          }}>
            <ProjectTwo 
              handleAbout={this.handleAbout}
              handleProjectOne={this.handleProjectOne} 
              handleProjectThree={this.handleProjectThree}
            />
            <Footer />
        </main>
        <main 
          ref={main => this.projectThreePage = main}
          style={{
            height: "100%", 
            width: "100%",
            position: "absolute", 
            bottom: "0",
            right: "0"
          }}>
            <ProjectThree 
              handleAbout={this.handleAbout}
              handleProjectOne={this.handleProjectOne} 
              handleProjectTwo={this.handleProjectTwo}
            />
            <Footer />
        </main>
      </div>
    );
  }
}

export default App;