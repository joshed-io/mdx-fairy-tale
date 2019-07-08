import React from "react";
import Character from './Character'

export default class KingMarkdown extends Character {
}

KingMarkdown.defaultProps = {
  ...Character.defaultProps,
  src: `/images/king-markdown-1.png`,
  activeSrc: `/images/king-markdown-2.png`,
}