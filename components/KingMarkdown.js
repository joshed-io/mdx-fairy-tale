import React from "react";

export default class KingMarkdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event) {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <img src="/images/king-markdown.png" css={{ height: this.props.height || '40vh' }} />
        {this.state.visible ? <div /> : <div />}
      </div>
    );
  }
}
