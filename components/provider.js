import React from 'react'
import Footer from './footer'

const Provider = ({ children, theme, index, slides }) => (
  <div css={{
    a: {
      color: theme.colors.link,
      textDecoration: 'none'
    },
  }}>
    {/* <div css={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      zIndex: '0',
      background: "url('/images/fairy-tale-castle.jpg') no-repeat center center",
      backgroundSize: "cover",
    }}></div>
    <div css={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      background: '#FFFFF0',
      opacity: '0.80',
      zIndex: '1',
    }}></div> */}
    <div css={{
      position: 'relative',
      zIndex: 2
    }}>
      {children}
    </div>
    <Footer theme={theme} index={index} />
  </div>
)

export default Provider
