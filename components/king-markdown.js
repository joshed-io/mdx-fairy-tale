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
        {this.state.visible ? <img src="/images/king-markdown.png" /> : <img src="/images/princess-javascript.png" />}
      </div>
    );
  }
}
