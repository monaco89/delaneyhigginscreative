import React from 'react'
import * as ImageStyle from '../style/Image.module.css'
import { StaticImage } from 'gatsby-plugin-image'
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
      fullSrc,
      smallSrc,
      onClick,
      title = '',
      alt = ''
    } = this.props

    fullSrc = `${src}${''}`
    smallSrc = `${src}${''}`

    let style = {}
    if (background) {
      style = {
        backgroundImage: `url(${
          this.state.isIntersecting ? fullSrc : smallSrc
        })`,
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
        )}
        {!background && (
          <StaticImage
            className={`${ImageStyle.BackgroundImage}.${className}`}
            src={fullSrc}
            srcSet={secSet}
            sizes={'100vw'}
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
