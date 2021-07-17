import React from 'react';
import '../style/NavLink.css';

function NavLink({
  to,
  className,
  children,
  currentPath,
  active,
  handleMenuToggle,
  ...props
}) {
  // Only close nav if it is open
  function handleLinkClick() {
    return active && handleMenuToggle();
  }

  return (
    <a
      href={to}
      className={`NavLink ${to === currentPath ? 'active' : ''} ${className}`}
      onClick={handleLinkClick}
      onKeyDown={handleLinkClick}
      {...props}
    >
      {children}
    </a>
  );
}

export default NavLink;
