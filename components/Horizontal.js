import React from 'react'
import Box from '@mdx-deck/layouts/src/Box'
import Flex from '@mdx-deck/layouts/src/Flex'

const Horizontal = ({ children }) => {
  const kids = React.Children.toArray(children)

  return (
    <Flex
      css={{
        alignItems: 'center',
        height: '100%',
        width: '100vw',
      }}
    >
      {kids.map(child => (
        <Box key={child.key} width={1 / kids.length}>
          {child}
        </Box>
      ))}
    </Flex>
  )
}

export default Horizontal