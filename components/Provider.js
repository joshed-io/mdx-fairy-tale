import React from "react";
import Footer from "./Footer";

const Provider = ({ children, index }) => (
  <>
    {children}
    <Footer index={index} />
  </>
);

export default Provider;
