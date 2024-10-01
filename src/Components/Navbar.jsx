import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(prevState => !prevState); };

      const handleLinkClick = () => {
        setIsMenuOpen(false);  };
  
    return (
        <>
          <nav className="navbar">
            <div className="navbar-logo">Logo</div>
            <div className="menu-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="navbar-title">
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/pricing" onClick={handleLinkClick}>Pricing</Link></li>
              {/* <li><Link to="/signup" onClick={handleLinkClick}>Sign Up</Link></li>
              <li><Link to="/signin" onClick={handleLinkClick}>Sign In</Link></li> */}
            </ul>
            <Button/></div>
          </nav>
          </>);
          };

          export default Navbar;