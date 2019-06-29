import React from "react";

function LargeProjectImage(props) {
  const {
    style = {
      borderRadius: "5px",
    },
    alt = "",
    src,
  } = props;

  return (
    <figure className="project-img-container">
      <figure className="image is-16by9">
        <img
          style={style}
          src={src}
          alt={alt}
        />
      </figure>
  </figure>
  );
}

export default LargeProjectImage;
