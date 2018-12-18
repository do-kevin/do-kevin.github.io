import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <main  
        style={{
          minHeight: "1200px",
          background: "#00597b"
      }}>
        <nav className="custom-navbar">
          <nav className="custom-dropdown">
            <button 
              className="drop-btn">
              Projects
            </button>
            <div className="drop-list">
              <button
                onClick={this.props.handleProjectOne}>Mood & Music</button>
              <button onClick={this.props.handleProjectTwo}>The Neverending Dead</button>
              <button onClick={this.props.handleProjectThree}>Zephyr Node</button>
            </div>
          </nav>
        </nav>
        <div style={{textAlign: "center"}}>
          <header>About</header>
        </div>
      </main>
    );
  }
}

export default About;