import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = () => (
  <div
    className="Logo"
    // style={{
    //   backgroundImage: `url(/images/minilogo.png)`
    // }}
  >
    <StaticImage
      src="../images/logo.png"
      alt="delaney higgins"
      placeholder="blurred"
    />
  </div>
)

export default Logo
