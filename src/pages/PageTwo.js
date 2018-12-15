import React, { Component } from "react";

class PageTwo extends Component {
  render() {
    return (
      <main>
        <nav className="navbar">
          <button className="about-btn" 
            style={{fontSize: "30px"}} 
            onClick={this.props.handlePageOne}>About</button>
      </nav>
      <div style={{textAlign: "center"}}>
        <header>Page Two</header>
      </div>
      </main>
    );
  }
}

export default PageTwo;