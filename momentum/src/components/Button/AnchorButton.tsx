import React from "react"
import { Link } from "react-router-dom"

import {Props} from './AnchorButton.types'

import classes from './AnchorButton.module.css'

export const AnchorButton: React.FC<Props> = ({to, children}) => {
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  )
}
