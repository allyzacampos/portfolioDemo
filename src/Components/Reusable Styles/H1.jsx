import { Typography } from '@material-tailwind/react'
import React from 'react'

export const H1 = (props) => {
  return (
    <Typography className="h1 font-bold text-black-dark">{props.children}</Typography>
  )
}
