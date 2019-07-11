import React from "react";

export default ({ width, height, style, ...props }) => (
  <img style={{ ...style, width, height }} {...props} />
)