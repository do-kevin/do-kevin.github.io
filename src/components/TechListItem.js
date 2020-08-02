import React from "react";

function TechListItem(props) {
  const {
    text = "",
    color = "hsl(0, 0%, 100%)",
    backgroundColor = "hsl(0, 0%, 0%)",
    className = "technical-list-item",
    style = {
      backgroundColor,
      color,
    },
  } = props;

  return (
    <div
      className={className}
      style={style}
    >
      {text}
    </div>
  );
}

export default TechListItem;
