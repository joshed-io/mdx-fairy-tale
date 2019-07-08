export const mdx1 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown

<KingMarkdown height="50vh" />

The king likes his content text-heavy.

`

export const mdx2 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown

<KingMarkdown height="75vh" />

The king likes his content text-heavy.

`

export const mdx3 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown

<KingMarkdown height="75vh" src="/images/king-markdown-2.png" />

The king likes his content text-heavy.

`

export const jsx1 =  `
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
        <img src="/images/king-markdown.png" css={{ height: '25vh' }} />
        {this.state.visible ? <div /> : <div />}
      </div>
    );
  }
}
`
