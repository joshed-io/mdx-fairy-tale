import React from "react";
import styled from "styled-components";

import Code from "./Code";

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeVisible: false,
      active: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter(event) {
    if (this.props.hoverable) {
      this.setState({ active: true });
    }
  }

  handleMouseLeave(event) {
    if (this.props.hoverable) {
      this.setState({ 
        active: false, 
        // codeVisible: false  // testing only, otherwise can lose behind mag glass
      });
    }
  }

  handleClick(event) {
    this.setState({ codeVisible: true });
  }

  renderCharacter() {
    if (this.state.codeVisible && this.props.codeSnippet) {
      return (
        <div css={{ position: "relative" }}>
          <Image
            src={this.props.activeSrc || this.props.src}
            css={{
              height: this.props.height,
              position: "absolute",
              opacity: "1",
              bottom: "20px",
              left: "-400px",
              zoom: '0.5'
            }}
          />
          <Code>{this.props.codeSnippet}</Code>
        </div>
      );
    } else {
      if (this.state.active && this.props.activeSrc) {
        return (
          <Image
            src={this.props.activeSrc}
            css={{ height: this.props.height }}
          />
        );
      } else if (this.state.active) {
        return (
          <ZoomedImage
            src={this.props.src}
            css={{ height: this.props.height }}
          />
        );
      } else {
        return (
          <Image src={this.props.src} css={{ height: this.props.height }} />
        );
      }
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
`;

const ZoomedImage = styled(Image)`
zoom: 1.5;
:hover {
  transition: all .2s ease-in-out;
}
`;
