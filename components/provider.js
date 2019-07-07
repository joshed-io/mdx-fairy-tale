import React from "react";
import Footer from "./footer";

const Provider = ({ children, theme, index, slides }) => (
  <>
    {children}
    <Footer theme={theme} index={index} />
  </>
);

export default Provider;
