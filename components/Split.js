import React from 'react'
import Box from '@mdx-deck/layouts/src/Box'
import Flex from '@mdx-deck/layouts/src/Flex'

const Split = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children)
  return (
    <Flex
      css={{
        alignItems: 'center',
        height: '100%',
        width: '90vw',
      }}
    >
      <Box width={1 / 2}>{a}</Box>
      <Box width={1 / 2}>{rest}</Box>
    </Flex>
  )
}

export default Split