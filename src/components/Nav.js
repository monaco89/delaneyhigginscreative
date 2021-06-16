import React from 'react';
import { Location } from '@reach/router';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaPinterest, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Logo from './Logo';

import '../style/Nav.css';

class Navigation extends React.Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false,
  };

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname });

  handleMenuToggle = () => this.setState({ active: !this.state.active });

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle();

  toggleSubNav = (subNav) =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav,
    });

  render() {
    const { active } = this.state,
      NavLink = ({ to, className, children, ...props }) => (
        <a
          href={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          onKeyDown={this.handleLinkClick}
          {...props}
        >
          {children}
        </a>
      );

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`} role="navigation">
        <div className="Nav--Container container">
          <a
            href="/"
            onClick={this.handleLinkClick}
            className="mobileLogo"
            title="Home"
          >
            <Logo />
          </a>
          <a
            href="/"
            onClick={this.handleLinkClick}
            className="desktopLogo"
            title="Home"
          >
            <Logo />
          </a>
          <div className="Nav--Links">
            <a
              href="/"
              className={`NavLink ${
                this.props.location.pathname === '/' ? 'active' : ''
              }`}
              style={{
                color: this.props.location.pathname === '/' ? 'white' : 'black',
              }}
            >
              Home
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
                  this.props.location.pathname === '/interior' ||
                  this.props.location.pathname.includes('tabletop') ||
                  this.props.location.pathname.includes('fashion') ||
                  this.props.location.pathname.includes('holiday')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('styling')}
                onKeyDown={() => this.toggleSubNav('styling')}
                style={{
                  color:
                    this.props.location.pathname === '/' ? 'white' : 'black',
                }}
              >
                Styling
                <div className="Nav--GroupLinks">
                  <NavLink to="/prop" className="Nav--GroupLink">
                    Prop
                  </NavLink>
                  <NavLink to="/interior" className="Nav--GroupLink">
                    Interior
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
                  this.props.location.pathname.includes('product') ||
                  this.props.location.pathname.includes('interiors')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('photography')}
                onKeyDown={() => this.toggleSubNav('photography')}
                style={{
                  color:
                    this.props.location.pathname === '/' ? 'white' : 'black',
                }}
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
                  <NavLink to="/product" className="Nav--GroupLink">
                    Product
                  </NavLink>
                </div>
              </span>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'design' ? 'active' : ''
              }`}
            >
              <span
                role="navigation"
                className={`NavLink ${
                  this.props.location.pathname.includes('interiordesign') ||
                  this.props.location.pathname.includes('graphicdesign')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('design')}
                onKeyDown={() => this.toggleSubNav('design')}
                style={{
                  color:
                    this.props.location.pathname === '/' ? 'white' : 'black',
                }}
              >
                Design
                <div className="Nav--GroupLinks">
                  <NavLink to="/interiordesign" className="Nav--GroupLink">
                    Interior Design
                  </NavLink>
                  <NavLink to="/graphicdesign" className="Nav--GroupLink">
                    Graphic Design
                  </NavLink>
                </div>
              </span>
            </div>
            <NavLink
              to="/about/"
              style={{
                color: this.props.location.pathname === '/' ? 'white' : 'black',
              }}
            >
              About
            </NavLink>
            <NavLink
              to="https://instagram.com/higginsdelaney"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                color: this.props.location.pathname === '/' ? 'white' : 'black',
              }}
              title="Instagram"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              to="https://www.pinterest.com/delaneyhigginscreative"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                color: this.props.location.pathname === '/' ? 'white' : 'black',
              }}
              title="Pinterest"
            >
              <FaPinterest />
            </NavLink>
            <NavLink
              to="/contact/"
              style={{
                color: this.props.location.pathname === '/' ? 'white' : 'black',
              }}
              title="Contact Me"
            >
              <FiMail />
            </NavLink>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
            onKeyDown={this.handleMenuToggle}
            aria-label="Navigation Menu"
          >
            {active ? (
              <IoMdClose />
            ) : (
              <IoMdMenu
                style={{
                  color:
                    this.props.location.pathname === '/' ? 'white' : 'black',
                }}
              />
            )}
          </button>
        </div>
      </nav>
    );
  }
}

const Nav = () => <Location>{(route) => <Navigation {...route} />}</Location>;

export default Nav;
