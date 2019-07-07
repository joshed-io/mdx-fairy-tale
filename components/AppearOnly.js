import React from 'react'
import { useSteps } from '@mdx-deck/components'

export const AppearOnly = props => {
  const arr = React.Children.toArray(props.children)
  const step = useSteps(arr.length - 1)
  const children = arr.map((child, i) =>
    i == step
      ? child
      : React.cloneElement(child, {
        style: {
          ...child.props.style,
          display: 'none',
        },
      })
  )

  return <>{children}</>
}

export default AppearOnly