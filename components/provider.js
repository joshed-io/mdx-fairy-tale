import React from 'react'
import Footer from './footer'

const Provider = ({ children, theme, index, slides }) => (
  <div css={{
    a: {
      color: theme.colors.link,
      textDecoration: 'none'
    },
  }}>
    <div css={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      background: '#FFFFF0',
      opacity: '0.80',
      zIndex: '0'
    }}></div>
    {children}
    {/* <Footer theme={theme} index={index} /> */}
  </div>
)

export default {
  Provider
}
