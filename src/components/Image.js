import React, { Fragment } from 'react'
import './Image.css'

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
      <Fragment>
        <Fragment>
          {background && (
            <div
              className={`BackgroundImage absolute ${className}`}
              style={style}
            />
          )}
          {!background && (
            <img
              className={`${className}`}
              src={fullSrc}
              srcSet={secSet}
              sizes={'100vw'}
              onClick={onClick}
              title={title}
              alt={alt}
            />
          )}
        </Fragment>
      </Fragment>
    )
  }
}

export default Image
