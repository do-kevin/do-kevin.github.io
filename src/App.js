import React, { Component } from "react";
import anime from "animejs";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import "./static/css/App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.pageOneContainer = null;
    this.animePageOne = null;

    this.pageTwoContainer = null;
    this.animePageTwo = null;

    this.state = {
      pageOneScaleY: [
        {value: 0, duration: 1200}
      ],
      pageOneScaleX: [
        {value: 0, duration: 1200}
      ],
      pageTwoScaleY: [
        {value: 1, duration: 1200}
      ],
      pageTwoScaleX: [
        {value: 1, duration: 1200}
      ]
    };
  }

  componentDidMount() {
    this.anime = anime({
      targets: this.pageOneContainer,
      scaleY: 1,
      scaleX: 1
    });

    this.anime = anime({
      targets: this.pageTwoContainer,
      scaleY: 0,
      scaleX: 0
    });
  }
  
  componentDidUpdate() {
    this.anime = anime({
      targets: this.pageOneContainer,
      scaleY: this.state.pageOneScaleY,
      scaleX: this.state.pageOneScaleX
    });

    this.anime = anime({
      targets: this.pageTwoContainer,
      scaleY: this.state.pageTwoScaleY,
      scaleX: this.state.pageTwoScaleX
    });
  }

  handlePageOne = () => {
    console.log("hit")
    this.setState({
      pageOneScaleY: [
        {value: 0.02, duration: 2000, delay: 2000},
        {value: 1, duration: 2000}
      ],
      pageOneScaleX: [
        {value: 0.7, duration: 2000, delay: 2000},
        {value: 1, duration: 1500}
      ],      
      pageTwoScaleY: [
        {value: 0.02, duration: 1000, delay: 700},
        {value: 0, duration: 2000}
      ],
      pageTwoScaleX: [
        {value: 0.7, duration: 1000, delay: 700},
        {value: 0, duration: 1500}
      ]
    });
  }

  handlePageTwo = () => {
    console.log("hit")
    this.setState({
      pageOneScaleY: [
        {value: 0.02, duration: 1000, delay: 700},
        {value: 0, duration: 2000}
      ],
      pageOneScaleX: [
        {value: 0.7, duration: 1000, delay: 700},
        {value: 0, duration: 1500}
      ],      
      pageTwoScaleY: [
        {value: 0.02, duration: 2000, delay: 2000},
        {value: 1, duration: 2000}
      ],
      pageTwoScaleX: [
        {value: 0.7, duration: 2000, delay: 2000},
        {value: 1, duration: 1500}
      ]
    });
  }
 
  render() {
    return (
      <div className="App">
        <main 
          ref={main => this.pageOneContainer = main}
          style={{
            height: "100%", 
            width: "100%", 
            background: "skyblue",
            position: "absolute", 
            top: "0",
            left: "0",
            zIndex: 1
          }}>
            <PageOne 
              handlePageTwo={this.handlePageTwo} 
            />
        </main>
        <main 
          ref={main => this.pageTwoContainer = main}
          style={{
            height: "100%", 
            width: "100%", 
            background: "purple",
            position: "absolute", 
            bottom: "0",
            right: "0"
          }}>
            <PageTwo 
              handlePageOne={this.handlePageOne} 
            />
        </main>
      </div>
    );
  }
}

export default App;