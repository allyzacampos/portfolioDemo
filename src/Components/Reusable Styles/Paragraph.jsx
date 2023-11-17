import { Typography } from '@material-tailwind/react'
import React from 'react'

export const Paragraph = (props) => {
  return (
    <Typography className="p leading-8 text-black-dark">{props.children}</Typography>
  )
}
