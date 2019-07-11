import React from 'react'
import Character from './Character'

export default class PrincessJavaScript extends Character {
}

PrincessJavaScript.defaultProps = {
  ...Character.defaultProps,
  image: `princess-javascript-1.png`,
}