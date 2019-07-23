import React from "react";
import Character from './Character'

export default class KingMarkdown extends Character {
}

KingMarkdown.defaultProps = {
  ...Character.defaultProps,
  image: `king-markdown-1.png`,
  width: '20vw'
}