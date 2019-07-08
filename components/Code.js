import React from 'react'
import styled from 'styled-components'

const Code = (props) => (
  <Pre {...props}>
  </Pre>
)

const Pre = styled.pre`
background: white;
font-size: 18px;
line-height: 22px;
padding: 25px;
margin: 25px;
overflow: hidden;
border: 1px solid #0a0a0a;
`

export default Code