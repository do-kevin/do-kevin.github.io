import React from "react";
import Anchor from "components/Anchor";

function TeammateImageLink(props) {
  const {
    href = "", src, alt = "", name = "",
  } = props;

  return (
    <figure className="teammate-container">
      <Anchor href={href}>
        <img
          className="teammate-pic"
          src={src}
          alt={alt}
        />
        {name}
      </Anchor>
    </figure>
  );
}

export default TeammateImageLink;
