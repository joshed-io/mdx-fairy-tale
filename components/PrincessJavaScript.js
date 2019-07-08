import React from 'react'
import Character from './Character'

export default class PrincessJavaScript extends Character {
}

PrincessJavaScript.defaultProps = {
  ...Character.defaultProps,
  src: `/images/princess-javascript-1.png`
}