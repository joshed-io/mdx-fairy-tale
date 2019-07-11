import PrincessJavaScript from './PrincessJavaScript'

export default class PrincessJavaScriptStatic extends PrincessJavaScript {
}

PrincessJavaScriptStatic.defaultProps = {
  ...PrincessJavaScript.defaultProps,
  hoverable: false
}