import React from "react";

function ProjectShowcase(props) {
  const { 
    title, src, alt = "", githubLinkHref = "",
    detailsOnClick, liveLinkHref = "",
  } = props;

  return (
    <figure className="project-showcase-container">
      <div>
        <h1>{title}</h1>
        <img
          src={src}
          alt={alt}
        />
        <section className="project-content">
          <a
            className="project-content__github-btn"
            href={githubLinkHref}
            target="_blank" rel="noreferrer noopener">
              <i className="fab fa-github-alt" />
          </a>
          <button
            className="project-content__details-btn"
            onClick={detailsOnClick}
          >
            <span>Details</span>
          </button>
          <a
            className="project-content__live-btn"
            href={liveLinkHref}
            target="_blank" rel="noreferrer noopener">
              <i className="fas fa-external-link-square-alt" />
          </a>
        </section>
      </div>
    </figure>
  );
}

export default ProjectShowcase;
