import React from 'react'
import Image from './Image'
import Logo from '../../static/images/name.png'
import '../style/HomeHero.css'

const HomeHero = ({ backgroundImage, large, className = '' }) => {
  if (large) className += ' HomeHero-large'
  return (
    <div className={`HomeHero relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage.fluid.src}
          alt="delaney higgins"
          size="cover"
        />
      )}
      <div className="relative">
        <img src={Logo} className="logo" alt="delaney higgins" />
      </div>
    </div>
  )
}

export default HomeHero
