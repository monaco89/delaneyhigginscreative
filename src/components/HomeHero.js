import React from 'react'
import Image from './Image'
import Logo from '../../static/images/logo.png'
import Banner from '../../static/images/delaney_home.jpg'
import './HomeHero.css'

const HomeHero = ({ backgroundImage, large, className = '' }) => {
  if (large) className += ' HomeHero-large'
  return (
    <div className={`HomeHero relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={Banner}
          alt="delaney higgins"
          size="cover"
        />
      )}
      <div className="container relative">
        <img src={Logo} className="logo" alt="delaney higgins" />
      </div>
    </div>
  )
}

export default HomeHero
