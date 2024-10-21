import React from 'react';
import logo from './images/logo.png'; // Pakeiskite kelią į savo logotipą

const createFavicon = () => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = logo; // Naudok logotipą kaip favicon
    document.head.appendChild(link);
};

const Logo = () => {
    React.useEffect(() => {
        createFavicon();
    }, []);

    return (
        <div>
            <img src={logo} 
            alt="CodeAndClutch" 
            style={{ maxWidth: '120px', height: 'auto', padding: 'none' }} />
        </div>
    );
};

export default Logo;
