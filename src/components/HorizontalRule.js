import React from "react";

function HorizontalRule(props) {
  const {
    height = "1px",
    width = "100%",
    style = {
      height,
      width,
      marginTop: "1vh",
      marginBottom: "1vh",
      background: "hsl(0, 0%, 100%)",
    },
  } = props;
  return(
    <hr style={style} />
  );
}

export default HorizontalRule;
