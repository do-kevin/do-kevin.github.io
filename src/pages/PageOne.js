import React, { Component } from "react";

class PageOne extends Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <header>Page One</header>
        <button className="page-btns" onClick={this.props.handlePageTwo}>Page Two</button>
      </div>
    );
  }
}

export default PageOne;