import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../style/HomeHero.css'

const HomeHero = ({ large, className = '' }) => (
  <div className="HomeHero">
    <StaticImage
      style={{
        gridArea: '1/1',
        maxHeight: 800
      }}
      layout="fullWidth"
      // aspectRatio={3 / 1}
      alt="Delaney Higgins Creative Banner"
      src={'../images/header.jpg'}
      formats={['auto', 'webp', 'avif']}
      // transformOptions={{
      //   fit: 'fill'
      // }}
    />
    <div className="logoContainer">
      <StaticImage
        src="../images/name.png"
        className="logo"
        alt="delaney higgins"
        objectFit="contain"
      />
      <h1 className="logoHeader">Creative Portfolio</h1>
    </div>
  </div>
)

export default HomeHero
