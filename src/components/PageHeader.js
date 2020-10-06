import React from 'react'
// import Image from './Image'
import Content from './Content'
import '../style/PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
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
        <h1 className="PageHeader--Title">{title}</h1>
        <hr className="PageHeader--Line" />
        {subtitle && (
          <Content className="PageHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

export default PageHeader
