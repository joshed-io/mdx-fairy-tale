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
    const src = `${this.props.srcPrefix}${this.props.image}`;
    console.log(src)
    if (this.state.codeVisible && this.props.codeSnippet) {
      return (
        <div css={{ position: "relative" }}>
          <Image
            src={src}
            css={{
              width: this.props.width,
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
        style={this.props.style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        {this.renderCharacter()}
        {this.props.hoverable && !this.state.active && !this.state.codeVisible ?
          <p style={{ fontSize: '24px' }}>
            Hover, then click.
          </p>
        : ''}
      </div>
    );
  }
}

Character.defaultProps = {
  hoverable: false,
  width: '25vw',
  image: '',
  srcPrefix: '/images/'
};

const Image = styled.img`
width: ${props => props.width};
cursor: ${props => props.codeSnippet ? 'pointer' : 'inherit'};
`;

const ZoomedImage = styled(Image)`
zoom: 1.5;
`;
