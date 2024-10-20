// Footer.js
import React from 'react';
import './Footer.css'; // Pridėkite CSS failą, jei reikia

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} CodeAndClutch. Visos teisės saugomos.</p>
        </footer>
    );
};

export default Footer;
