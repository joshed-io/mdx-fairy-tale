import React from 'react'
import styled from '@emotion/styled'

const Image = ({ src, css, width, style }) => (
  <StyledImage
    src={src}
    width={width}
    css={css}
    style={style}
  />
)

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

export default Image