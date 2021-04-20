import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
// import BackgroundImage from 'gatsby-background-image'
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
    <div
      style={{
        // By using the same grid area for both, they are stacked on top of each other
        gridArea: '1/1',
        position: 'relative',
        placeItems: 'center',
        display: 'grid'
      }}
    >
      <StaticImage
        src="../images/name.png"
        className="logo"
        alt="delaney higgins"
      />
    </div>
  </div>
)

export default HomeHero
