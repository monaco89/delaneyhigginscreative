import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../style/HomeHero.css'

const HomeHero = () => (
  <div className="HomeHero">
    <StaticImage
      style={{
        gridArea: '1/1',
        maxHeight: 800
      }}
      layout="fullWidth"
      alt="Delaney Higgins Creative Banner"
      src={'../images/Banner.jpg'}
      formats={['auto', 'webp', 'avif']}
    />
    <div className="logoContainer">
      <h1 className="logoHeader">Delaney Higgins Creative Co.</h1>
    </div>
  </div>
)

export default HomeHero
