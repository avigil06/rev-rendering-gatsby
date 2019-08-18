import React, { useState } from 'react';
import Logo from '../images/logos/logo.svg';

const NavBar = () => {
  const [menuVisible, setMenuVisibility] = useState(false);
  const toggleMenu = () => setMenuVisibility(!menuVisible);

  return (
    <nav className="navbar is-fresh is-transparent no-shadow" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">

          { /* Brand Logo */ }
          <a className="navbar-item" href="/">
            <img className="navbar-logo" src={Logo} alt="" />
          </a>

          { /* Menu Burger */ }
          <a
            role="button"
            className={`navbar-burger ${menuVisible && 'is-active'}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="nabvar-menu"
            onClick={toggleMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
        { /* Menu */ }
        <div
          id="navbar-menu"
          className={`navbar-menu is-static ${menuVisible && 'is-active'}`}>
          <div className="navbar-end">
            <a className="navbar-item" href="#">
              <span className="button signup-button rounded secondary-btn raised">Get a Quote</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;