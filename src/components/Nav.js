import React from 'react';
import { Location } from '@reach/router';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaPinterest, FaInstagram } from 'react-icons/fa';
import Logo from './Logo';
import NavLink from './NavLink';

import '../style/Nav.css';

function Navigation({ location }) {
  const currentPath = location.pathname || false;
  const [active, setActive] = React.useState(false);
  const [activeSubNav, setActiveSubNav] = React.useState(false);
  // const [currentPath, setCurrentPath] = React.useState(
  //   location.pathname || false
  // );

  // function handleState(val) {
  //   setState(val);
  // }

  function handleMenuToggle() {
    setActive(!active);
  }

  function toggleSubNav(subNav) {
    setActiveSubNav(activeSubNav === subNav ? false : subNav);
  }

  // Only close nav if it is open
  function handleLinkClick() {
    return active && handleMenuToggle();
  }

  return (
    <nav className={`Nav ${active ? 'Nav-active' : ''}`} role="navigation">
      <div className="Nav--Container container">
        <a
          href="/"
          onClick={handleLinkClick}
          className="mobileLogo"
          title="Home"
        >
          <Logo />
        </a>
        <a
          href="/"
          onClick={handleLinkClick}
          className="desktopLogo"
          title="Home"
        >
          <Logo />
        </a>
        <div className="Nav--Links">
          {/* <a
            href="/"
            className={`NavLink ${
              location.pathname === '/' ? 'active' : ''
            }`}
          >
            Home
          </a> */}
          <div
            className={`Nav--Group ${
              activeSubNav === 'styling' ? 'active' : ''
            }`}
          >
            <span
              role="navigation"
              className={`NavLink ${
                location.pathname.includes('prop') ||
                location.pathname === '/interior' ||
                location.pathname.includes('tabletop') ||
                location.pathname.includes('fashion') ||
                location.pathname.includes('holiday')
                  ? 'active'
                  : ''
              }`}
              onClick={() => toggleSubNav('styling')}
              onKeyDown={() => toggleSubNav('styling')}
            >
              Styling
              <div className="Nav--GroupLinks">
                <NavLink
                  to="/prop"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Prop
                </NavLink>
                <NavLink
                  to="/interior"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Interior
                </NavLink>
                <NavLink
                  to="/fashion"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Fashion
                </NavLink>
                <NavLink
                  to="/holiday"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Holiday
                </NavLink>
              </div>
            </span>
          </div>
          <div
            className={`Nav--Group ${
              activeSubNav === 'photography' ? 'active' : ''
            }`}
          >
            <span
              role="navigation"
              className={`NavLink ${
                location.pathname.includes('people') ||
                location.pathname.includes('places') ||
                location.pathname.includes('treats') ||
                location.pathname.includes('product') ||
                location.pathname.includes('interiors')
                  ? 'active'
                  : ''
              }`}
              onClick={() => toggleSubNav('photography')}
              onKeyDown={() => toggleSubNav('photography')}
            >
              Photography
              <div className="Nav--GroupLinks">
                <NavLink
                  to="/people"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  People
                </NavLink>
                <NavLink
                  to="/places"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Places
                </NavLink>
                <NavLink
                  to="/treats"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Treats
                </NavLink>
                <NavLink
                  to="/product"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Product
                </NavLink>
              </div>
            </span>
          </div>
          <div
            className={`Nav--Group ${
              activeSubNav === 'design' ? 'active' : ''
            }`}
          >
            <span
              role="navigation"
              className={`NavLink ${
                location.pathname.includes('interiordesign') ||
                location.pathname.includes('graphicdesign')
                  ? 'active'
                  : ''
              }`}
              onClick={() => toggleSubNav('design')}
              onKeyDown={() => toggleSubNav('design')}
            >
              Design
              <div className="Nav--GroupLinks">
                <NavLink
                  to="/interiordesign"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Interior Design
                </NavLink>
                <NavLink
                  to="/graphicdesign"
                  className="Nav--GroupLink"
                  currentPath={currentPath}
                  active={active}
                  handleMenuToggle={handleMenuToggle}
                >
                  Graphic Design
                </NavLink>
              </div>
            </span>
          </div>
          <NavLink
            to="/about/"
            currentPath={currentPath}
            active={active}
            handleMenuToggle={handleMenuToggle}
          >
            About
          </NavLink>
          <NavLink
            to="https://instagram.com/higginsdelaney"
            rel="noopener noreferrer"
            target="_blank"
            title="Instagram"
            currentPath={currentPath}
            active={active}
            handleMenuToggle={handleMenuToggle}
          >
            <FaInstagram />
          </NavLink>
          <NavLink
            to="https://www.pinterest.com/delaneyhigginscreative"
            rel="noopener noreferrer"
            target="_blank"
            title="Pinterest"
            currentPath={currentPath}
            active={active}
            handleMenuToggle={handleMenuToggle}
          >
            <FaPinterest />
          </NavLink>
          <NavLink
            to="/contact/"
            title="Contact Me"
            currentPath={currentPath}
            active={active}
            handleMenuToggle={handleMenuToggle}
          >
            Contact
          </NavLink>
        </div>
        <button
          type="button"
          className="Button-blank Nav--MenuButton"
          onClick={handleMenuToggle}
          onKeyDown={handleMenuToggle}
          aria-label="Navigation Menu"
        >
          {active ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
    </nav>
  );
}

const Nav = () => <Location>{(route) => <Navigation {...route} />}</Location>;

export default Nav;
