import React, { Component } from "react";

class ProjectOne extends Component {
  render() {
    return (
      <main>
        <nav className="navbar">
          <button className="about-btn" 
            style={{fontSize: "30px"}} 
            onClick={this.props.handleAbout}>About</button>
      </nav>
      <div style={{textAlign: "center"}}>
        <header>Page Two</header>
      </div>
      </main>
    );
  }
}

export default ProjectOne;