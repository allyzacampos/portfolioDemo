import { Typography } from '@material-tailwind/react'
import React from 'react'

export const ParagraphBold = (props) => {
  return (
    <Typography className="p-bold font-bold leading-8 text-black-dark">{props.children}</Typography>
  )
}