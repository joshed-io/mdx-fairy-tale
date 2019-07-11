import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = props => (
  <SyntaxHighlighter
    language={props.language}
    style={prism}
    customStyle={{
      margin: "0",
      padding: "0",
      background: "none",
      fontSize: '22px',
      lineHeight: '26px',
      ...props.style
    }}
  >
    {props.children}
  </SyntaxHighlighter>
);

Code.defaultProps = {
  language: `jsx`
};

export default Code;
