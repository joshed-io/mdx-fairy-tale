import React from "react";
import Footer from "./footer";

const Provider = ({ children, index }) => (
  <>
    {children}
    <Footer index={index} />
  </>
);

export default Provider;
