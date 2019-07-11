import React from "react";
import styled from "styled-components";

import Box from "./Box";
import Code from "./Code";

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = { codeVisible: false, active: false };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter() {
    if (this.props.hoverable) {
      this.setState({ active: true });
    }
  }

  handleMouseLeave() {
    if (this.props.hoverable) {
      this.setState({ active: false });
    }
  }

  handleClick(event) {
    this.setState({ codeVisible: true });
  }

  renderCharacter() {
    const src = this.state.active && this.props.activeSrc ? this.props.activeSrc : this.props.src; 
    if (this.state.codeVisible && this.props.codeSnippet) {
      return (
        <div css={{ position: "relative" }}>
          <Image
            src={src}
            css={{
              height: this.props.height,
              position: "absolute",
              opacity: "1",
              bottom: "20px",
              left: "-400px",
              zoom: '0.5'
            }}
          />
          <Box>
            <Code style={{ fontSize: "18px" }}>{this.props.codeSnippet}</Code>
          </Box>
        </div>
      );
    } else {
      return this.state.active ? 
        <ZoomedImage src={src} {...this.props} /> :
        <Image src={src} {...this.props} />;
    }
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        {this.renderCharacter()}
      </div>
    );
  }
}

Character.defaultProps = {
  hoverable: true,
  height: `50vh`,
  src: ``,
  activeSrc: ``
};

const Image = styled.img`
height: ${props => props.height};
cursor: ${props => props.codeSnippet ? 'pointer' : 'inherit'};
`;

const ZoomedImage = styled(Image)`
zoom: 1.5;
`;
