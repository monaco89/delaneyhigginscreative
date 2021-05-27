import React from 'react'
// import Image from './Image'
import Content from './Content'
import '../style/PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  // backgroundImage,
  large,
  className = '',
  section
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {/* {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )} */}
      <div className="container relative">
        <h1
          className={section ? 'PageHeader--SectionTitle' : 'PageHeader--Title'}
          style={{ color: title === 'Social Media' ? 'black' : '' }}
        >
          {title}
        </h1>
        <hr className="PageHeader--Line" />
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

export default PageHeader
