import React from 'react'
import { Link } from 'gatsby'

import '../style/NavLink.css'

export default ({ className, children, ...props }) => (
  <Link {...props} className={`NavLink ${className || ''}`}>
    {children}
  </Link>
)
