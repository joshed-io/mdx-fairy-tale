import React from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = props => (
  <Wrapper>
    <Overlay />
    <SyntaxHighlighter
      language={props.language}
      style={prism}
      customStyle={{
        margin: "0",
        background: "none",
        position: "relative",
        zIndex: "2"
      }}
    >
      {props.children}
    </SyntaxHighlighter>
  </Wrapper>
);

Code.defaultProps = {
  language: `jsx`
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #cacaca;
  border-radius: 10px;
  font-size: 18px;
  line-height: 22px;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: white;
  background-size: cover;
  opacity: 0.75;
  border-radius: 10px;
`;

export default Code;
