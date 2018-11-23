import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    return (
      <div className={`card showcase is-horizontal ${this.props.animateClassNames}`}>
        <div className="card-image">
          <figure className="image is-16by9">
            <img src={this.props.image} alt={this.props.name} className="project-img animated fadeIn"/>
          </figure>
        </div>
        <div className="card-content project-content">
          <p className="title has-text-centered noselect project-body">{this.props.name}</p>
          <div className="content noselect project-body">{this.props.description}</div>
          <div className="content noselect has-text-centered project-body">
              <h6>Developers</h6>
              {this.props.developers}
          </div>
        </div>
        <footer className="card-footer footer-links">
          <p className="project-links">
            <span>
              <a href={this.props.github} rel="noreferrer noopener" target="_blank" >
                <i className="fab fa-github-square" id="gh-icon"></i>
              </a>
            </span>
          </p>
          <p className="project-links">
            <span>
              <a href={this.props.live} rel="noreferrer noopener" target="_blank">
                <i className="fas fa-external-link-square-alt" id="ext-link-icon"></i>
              </a>
            </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default ProjectCard;