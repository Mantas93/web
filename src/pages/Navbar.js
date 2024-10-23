import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import '../css/Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTransmissionOpen, setIsTransmissionOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleTransmission = () => {
    setIsTransmissionOpen(!isTransmissionOpen);
  };

  const handleLinkClick = () => {
    setIsTransmissionOpen(false);
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Pagrindinis</Link>
        <div onClick={toggleTransmission} className="transmission-toggle">
          Transmisijų tipai
          <span>{isTransmissionOpen ? ' -' : ' +'}</span>
        </div>
        {isTransmissionOpen && (
          <div className="transmission-dropdown">
            <Link to="/manual" onClick={handleLinkClick}>Mechaninė</Link>
            <Link to="/automatic" onClick={handleLinkClick}>Automatinė</Link>
            <Link to="/semi-automatic" onClick={handleLinkClick}>Semi-auto</Link>
            <Link to="/cvt" onClick={handleLinkClick}>CVT</Link>
            <Link to="/dsg" onClick={handleLinkClick}>Direct Shift Gearbox</Link>
            <Link to="/electric" onClick={handleLinkClick}>eCVT</Link>
          </div>
        )}
        <Link to="/about" onClick={handleLinkClick}>Apie mane</Link>
      </div>
      <div className="burger-menu" onClick={toggleNav}>
        <div className={`burger-icon ${isNavOpen ? 'open' : ''}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
