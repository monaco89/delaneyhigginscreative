import React from 'react'
import { Link } from 'gatsby'

import '../style/NavLink.css'

const NavLink = ({ className, children, ...props }) => (
  <Link {...props} className={`NavLink ${className || ''}`}>
    {children}
  </Link>
)

export default NavLink
