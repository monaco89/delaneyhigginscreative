import React, { Fragment } from 'react'

import './Image.css'

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  imageSizes = [
    '320',
    '450',
    '640',
    '750',
    '800',
    '900',
    '1000',
    '1200',
    '1500',
    '1600',
    '2000'
  ] // image sizes used for image source sets

  state = {
    isIntersecting: false
  }

  handleIntersection = e => {
    if (e.isIntersecting) {
      this.setState({ isIntersecting: true })
    }
  }

  getResolutionString(res) {
    /* add resolutions options for inline images */
    if (res === 'small') {
      res = '800x'
    } else if (res === 'medium') {
      res = '1000x'
    } else if (res === 'large') {
      res = '2000x'
    }
    return res
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
