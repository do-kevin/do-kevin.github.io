import React, { Component } from "react";

class PageTwo extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <header>Page Two</header>
        <button className="page-btns" onClick={this.props.handlePageOne}>Page One</button>
      </div>
    );
  }
}

export default PageTwo;