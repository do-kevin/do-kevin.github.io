import React, { Component } from "react";

// CSS
import "../css/ProjectCard.css";

class ProjectCard extends Component {
  render() {
    return (
      <div className="card showcase animated rollIn">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.props.image} alt={this.props.name} />
          </figure>
        </div>
        <div className="card-content">
          <p className="title has-text-centered">{this.props.name}</p>
          <div className="content">{this.props.description}</div>
        </div>
        <footer className="card-footer footer-links">
          <p className="card-footer-item">
            <span>
              <a href={this.props.github} rel="noreferrer noopener" target="_blank" >
                <i className="fab fa-github-square"></i>
              </a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>
              <a href={this.props.live} rel="noreferrer noopener" target="_blank">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default ProjectCard;
