import React from 'react'
import ImageStyle from '../style/Image.module.css'
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
          <img
            className={`${ImageStyle.BackgroundImage}.${className}`}
            src={fullSrc}
            srcSet={secSet}
            sizes={'100vw'}
            onClick={onClick}
            onKeyDown={onClick}
            title={title}
            alt={alt}
          />
        )}
      </>
    )
  }
}

export default Image
