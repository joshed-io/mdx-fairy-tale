import React from "react";
import Character from './Character'

export default class KingMarkdownStatic extends Character {
}

KingMarkdownStatic.defaultProps = {
  ...Character.defaultProps,
  hoverable: false,
  src: `/images/king-markdown-1.png`
}