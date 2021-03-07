import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../style/HomeHero.css'

const HomeHero = ({ large, className = '' }) => {
  if (large) {
    className += ' HomeHero-large'
  }
  return (
    <div className={`HomeHero relative ${className}`}>
      <div className="relative">
        <StaticImage
          src="../images/name.png"
          className="logo"
          alt="delaney higgins"
        />
      </div>
    </div>
  )
}

export default HomeHero
