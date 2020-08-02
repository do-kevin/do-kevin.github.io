import React, { Component } from "react";

const dropBtnBorders = {
  borderTopRightRadius: "40px",
  borderTopLeftRadius: "40px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid hsl(227, 64%, 18%)"
};

class Navbar extends Component {
  state = {
    displayDropdown: false
  };

  clickDropBtn = () => {
    this.setState({
      displayDropdown: !this.state.displayDropdown
    });
    console.log(this.state.displayDropdown);
  };

  render() {
    const { displayDropdown } = this.state;
    const {
      onClickKevinPic, children,
    } = this.props;

    return (
      <nav className="custom-navbar">
        <figure style={{ width: "100%", textAlign: "left", padding: "3px 5px 3px 5px" }}>
          <img className="kevin-pic"
            onClick={onClickKevinPic}
            style={{
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
            src={require("static/images/avatars/Kevin.png")}
            alt="Kevin"
          />
        </figure>
        <aside style={{ width: "100%", textAlign: "right", padding: "1.9vh 10px 2.5vh 10px" }}>
          <nav className="custom-dropdown">
            <button
              className="drop-btn"
              onClick={this.clickDropBtn}
              style={
                displayDropdown
                  ? dropBtnBorders
                  : null
              }
            >
              Menu
          </button>
            <div className="drop-list"
              style={{
                display: (displayDropdown ? "block" : "none")
              }}
            >
              {children}
            </div>
          </nav>
        </aside>
      </nav>
    );
  }
}

export default Navbar;
