import React from "react";
import Character from './Character'

export default class PrincessJavaScriptStatic extends Character {
}

PrincessJavaScriptStatic.defaultProps = {
  ...Character.defaultProps,
  hoverable: false,
  src: `/images/princess-javascript-1.png`
}