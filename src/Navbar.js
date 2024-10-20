// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import BurgerMenu from './pages/BurgerMenu';
import './Navbar.css'; // Importuokite stilius

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/galery">Galery</Link>
        <Link to="/about">About</Link>
      </div>
      <BurgerMenu />
    </nav>
  );
};

export default Navbar;
