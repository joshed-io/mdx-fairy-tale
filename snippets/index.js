export const liveCode = `<PrincessJavaScript 
    image="princess-javascript-1.png"
    width="15vw" />`

export const mdx1 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown

<KingMarkdown width="25vw" />

This king has a width property declared. 

`

export const mdx2 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown

<KingMarkdown width="35vw" />

This king has a larger width.

`

export const mdx3 = `
import KingMarkdown from 'components/KingMarkdown.js'

# Meet King Markdown 

<KingMarkdown
  width="35vw"
  image="king-markdown-2.png" />

This king has a width and image declared.

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
          visibility: this.state.visible ? 'visible' : 'hidden' }} />
      </div>
    );
  }
}
`
