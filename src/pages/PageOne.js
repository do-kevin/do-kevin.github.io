import React, { Component } from "react";

class PageOne extends Component {
  render() {
    return (
      <main>
        <nav className="navbar">
          <div className="dropdown">
            <button 
              className="drop-btn" 
              style={{fontSize: "30px"}}>Projects</button>
            <div className="drop-list">
              <button onClick={this.props.handlePageTwo}>Mood & Music</button>
              <button>The Neverending Dead</button>
              <button>Zephyr Node</button>
            </div>
          </div>
        </nav>
        <div style={{textAlign: "center"}}>
          <header>Page One</header>
        </div>
      </main>
    );
  }
}

export default PageOne;