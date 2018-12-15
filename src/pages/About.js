import React, {Component} from "react";

class About extends Component {
    render() {
        return (
          <div>
            <nav className="navbar">
              <button className="page-btns" onClick={this.props.handlePageTwo}>Page Two</button>
            </nav>
            <div style={{textAlign: "center"}}>
                <section>
                    <p>This is the About page</p>
                </section>
            </div>
          </div>
        );
      }
    }

export default About;