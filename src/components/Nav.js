import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <div className="Nav--Links">
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'exp' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('style') ||
                  this.props.location.pathname.includes('interiordesign')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('exp')}
              >
                Experience
                <div className="Nav--GroupLinks">
                  <NavLink to="/style" className="Nav--GroupLink">
                    Styling
                  </NavLink>
                  <NavLink to="/interiordesign" className="Nav--GroupLink">
                    Interior Design
                  </NavLink>
                </div>
              </span>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'skills' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('photography') ||
                  this.props.location.pathname.includes(
                    'visualmerchandising'
                  ) ||
                  this.props.location.pathname.includes('graphicdesign') ||
                  this.props.location.pathname.includes('sewing')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('skills')}
              >
                Skills
                <div className="Nav--GroupLinks">
                  <NavLink to="/photography/" className="Nav--GroupLink">
                    Photography
                  </NavLink>
                  <NavLink
                    to="/visualmerchandising/"
                    className="Nav--GroupLink"
                  >
                    Visual Merchandising
                  </NavLink>
                  <NavLink to="/graphicdesign/" className="Nav--GroupLink">
                    Graphic Design
                  </NavLink>
                  <NavLink to="/sewing/" className="Nav--GroupLink">
                    Sewing and Alterations
                  </NavLink>
                </div>
              </span>
            </div>
            <Link to="/" onClick={this.handleLinkClick}>
              <Logo />
            </Link>
            <a
              href="https://instagram.com/delaneyhigginscollection"
              target="_blank"
              className="NavLink"
            >
              Instagram
            </a>
            <NavLink to="/contact/">Contact</NavLink>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
