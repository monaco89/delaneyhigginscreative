import React from 'react'
import MoveTo from 'moveto'

const AnchorLink = ({
  children,
  href,
  className = '',
  options,
  onClick = () => {},
  toleranceElement // elementQuery e.g. '.Nav' – element height will be used as tolerance
}) => {
  const defaultOptions = {
    tolerance: 50,
    duration: 800,
    easing: 'easeOutQuart'
  }

  const target = href.replace(/^\//, '')

  const handleClick = e => {
    e.preventDefault()
    if (toleranceElement) {
      defaultOptions.tolerance =
        document.querySelector(toleranceElement).offsetHeight - 1
    }
    const moveTo = new MoveTo(Object.assign(defaultOptions, options))
    moveTo.move(document.querySelector(target))
    if (onClick) onClick(e)
  }

  return (
    <a href={href} className={`AnchorLink ${className}`} onClick={handleClick}>
      {children}
    </a>
  )
}

export default AnchorLink
