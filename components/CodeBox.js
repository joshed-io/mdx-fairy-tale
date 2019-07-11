import React from "react";
import styled from "styled-components";

const CodeBox = ({ children }) => (
  <Wrapper>
    <Overlay />
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export default CodeBox;

const Wrapper = styled.div`
  background: ${props => props.background || `transparent`};
  position: relative;
  overflow: hidden;
  border: 1px solid #cacaca;
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: white;
  background-size: cover;
  opacity: 0.70;
  border-radius: 10px;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 10px 25px;
`