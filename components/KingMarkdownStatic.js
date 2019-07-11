import KingMarkdown from './KingMarkdown'

export default class KingMarkdownStatic extends KingMarkdown {
}

KingMarkdownStatic.defaultProps = {
  ...KingMarkdown.defaultProps,
  hoverable: false
}