import React from 'react';
import logo from './images/logo.png'; // Pakeiskite kelią į savo logotipą

const Logo = () => {
    return (
        <div>
            <img src={logo} 
            alt="CodeAndClutch" 
            style={{ maxWidth: '120px', height: 'auto', padding: 'none' }} />
        </div>
    );
};

export default Logo;
