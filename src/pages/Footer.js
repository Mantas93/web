import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} CodeAndClutch. Visos teisės saugomos.</p>
        </footer>
    );
};

export default Footer;
