import React from 'react'

export const Grid = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">{props.children}</div>
  )
}
