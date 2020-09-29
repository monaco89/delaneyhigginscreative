import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Menu, X, Mail } from 'react-feather'
import { FaPinterest, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
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
      NavLink = ({ to, className, children, ...props }) => (
        <a
          href={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </a>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <a href="/" onClick={this.handleLinkClick} className="mobileLogo">
            <Logo />
          </a>
          <div className="Nav--Links">
            <a href="/" onClick={this.handleLinkClick} className="desktopLogo">
              <Logo />
            </a>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'styling' ? 'active' : ''
              }`}
            >
              <span
                role="navigation"
                className={`NavLink ${
                  this.props.location.pathname.includes('prop') ||
                  this.props.location.pathname.includes('interiordesign') ||
                  this.props.location.pathname.includes('tabletop') ||
                  this.props.location.pathname.includes('fashion') ||
                  this.props.location.pathname.includes('holiday')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('styling')}
              >
                Styling
                <div className="Nav--GroupLinks">
                  <NavLink to="/prop" className="Nav--GroupLink">
                    Prop
                  </NavLink>
                  <NavLink to="/interiordesign" className="Nav--GroupLink">
                    Interior
                  </NavLink>
                  <NavLink to="/tabletop" className="Nav--GroupLink">
                    TableTop
                  </NavLink>
                  <NavLink to="/fashion" className="Nav--GroupLink">
                    Fashion
                  </NavLink>
                  <NavLink to="/holiday" className="Nav--GroupLink">
                    Holiday
                  </NavLink>
                </div>
              </span>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'photography' ? 'active' : ''
              }`}
            >
              <span
                role="navigation"
                className={`NavLink ${
                  this.props.location.pathname.includes('people') ||
                  this.props.location.pathname.includes('places') ||
                  this.props.location.pathname.includes('treats') ||
                  this.props.location.pathname.includes('things') ||
                  this.props.location.pathname.includes('interiors')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('photography')}
              >
                Photography
                <div className="Nav--GroupLinks">
                  <NavLink to="/people" className="Nav--GroupLink">
                    People
                  </NavLink>
                  <NavLink to="/places" className="Nav--GroupLink">
                    Places
                  </NavLink>
                  <NavLink to="/treats" className="Nav--GroupLink">
                    Treats
                  </NavLink>
                  <NavLink to="/things" className="Nav--GroupLink">
                    Things
                  </NavLink>
                  <NavLink to="/interiors" className="Nav--GroupLink">
                    Interiors
                  </NavLink>
                </div>
              </span>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'graphicdesign' ? 'active' : ''
              }`}
            >
              <span
                role="navigation"
                className={`NavLink ${
                  this.props.location.pathname.includes('logos') ||
                  this.props.location.pathname.includes('socialmedia')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('graphicdesign')}
              >
                Graphic Design
                <div className="Nav--GroupLinks">
                  <NavLink to="/logos" className="Nav--GroupLink">
                    Logos
                  </NavLink>
                  <NavLink to="/socialmedia" className="Nav--GroupLink">
                    Social Media
                  </NavLink>
                </div>
              </span>
            </div>
            <NavLink to="/about/">About Me</NavLink>
            <NavLink to="https://instagram.com/higginsdelaney" target="_blank">
              <FaInstagram />
            </NavLink>
            <NavLink
              to="https://www.pinterest.com/delaneyhigginscreative"
              target="_blank"
            >
              <FaPinterest />
            </NavLink>
            <NavLink to="/contact/">
              <FiMail />
            </NavLink>
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

export default () => <Location>{route => <Navigation {...route} />}</Location>
