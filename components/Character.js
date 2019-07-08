import React from "react";
import styled from "styled-components";

import Code from './Code'

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
    this.setState({ active: true });
  }

  handleMouseLeave(event) {
    this.setState({ active: false });
  }

  handleClick(event) {
    this.setState({ active: true });
  }

  renderCharacter() {
    if (this.state.codeVisible && this.props.codeSnippet) {
      return (
        <Code>{this.props.codeSnippet}</Code>
      );
    } else {
      if (this.state.active) {
        return (<ActiveImage
          src={this.props.activeSrc}
          css={{ height: this.props.height }}
        />)
      } else {
        return (<Image
          src={this.props.src}
          css={{ height: this.props.height }}
        />)
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
  height: `50vh`,
  src: ``,
  activeSrc: ``
}

const Image = styled.img``;

const ActiveImage = styled(Image)`
`;
