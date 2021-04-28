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
      src={'../images/banner.jpg'}
      formats={['auto', 'webp', 'avif']}
      // transformOptions={{
      //   fit: 'fill'
      // }}
    />
    <div className="logoContainer">
      <h1 className="logoHeader">Delaney Higgins Creative Co.</h1>
    </div>
  </div>
)

export default HomeHero
