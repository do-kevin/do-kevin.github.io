import React, { Component } from "react";

// Components
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <p className="animated slideInRight">Hello world!</p>
      </div>
    );
  }
}

export default App;
