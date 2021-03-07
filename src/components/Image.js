import React from 'react'
import * as ImageStyle from '../style/Image.module.css'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
class Image extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  state = {
    isIntersecting: false
  }

  render() {
    let {
      background,
      backgroundSize = 'cover',
      className = '',
      src,
      secSet = '',
      onClick,
      title = '',
      alt = ''
    } = this.props
    console.log(src.images.fallback.src)
    let style = {}
    if (background) {
      style = {
        backgroundImage: `url(${src.images.fallback.src})`,
        backgroundSize
      }
    }

    return (
      <>
        {background && (
          <div
            className={`${ImageStyle.BackgroundImage} absolute ${ImageStyle.BackgroundImage}.${className}`}
            style={style}
          />
          // <GatsbyImage
          //   className={`${ImageStyle.BackgroundImage}.${className}`}
          //   image={src}
          //   // srcSet={secSet}
          //   // sizes={'100vw'}
          //   onClick={onClick}
          //   onKeyDown={onClick}
          //   title={title}
          //   alt={alt}
          //   placeholder="blurred"
          // />
        )}
        {!background && (
          <GatsbyImage
            className={`${ImageStyle.BackgroundImage}.${className}`}
            image={src}
            // srcSet={secSet}
            // sizes={'100vw'}
            onClick={onClick}
            onKeyDown={onClick}
            title={title}
            alt={alt}
            placeholder="blurred"
          />
        )}
      </>
    )
  }
}

export default Image
