import React from "react";
import styled from "styled-components";

const Box = ({ style, children }) => (
  <Wrapper style={style}>
    <Overlay />
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export default Box;

const Wrapper = styled.div`
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