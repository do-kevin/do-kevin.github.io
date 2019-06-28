import React from "react";

function Anchor(props) {
  const {
    children, className, href = "", target = "_blank", rel = "noreferrer noopener", style,
  } = props;

  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={rel}
      style={style}
    >
      {children}
    </a>
  );
}

export default Anchor;
