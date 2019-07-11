export const liveCode = `<PrincessJavaScript 
    image="princess-javascript-1.png"
    height="50vh" />`

export const mdx1 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown

<KingMarkdown height="50vh" />

This king has a height property declared. 

`

export const mdx2 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown

<KingMarkdown height="75vh" />

This king has a taller height.

`

export const mdx3 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown 

<KingMarkdown
  height="75vh"
  image="king-markdown-2.png" />

This king has a height and image declared.

`

export const jsx1 =  `
import React from "react";

export default class KingMarkdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event) {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <img src="king-markdown.png" css={{
          height: '25vh',
          visibility: this.state.visible ? 'visible' : 'hidden' }} />
      </div>
    );
  }
}
`
