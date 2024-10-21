import React, { useState } from 'react';
import electricImage from '../images/ecvt-transmission.jpg'; // Atitinkamo paveikslėlio kelias
import '../css/Electric.css'; // Importuojame CSS failą

const Electric = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="electric-container">
      <h1 className="electric-title">Elektrinė Pavarų Dėžė</h1>
      <img src={electricImage} alt="Elektrinė pavarų dėžė" className="electric-image" />
      <p className="electric-description">
        Elektrinės pavarų dėžės yra skirtos efektyviam energijos perdavimui elektriniuose automobiliuose.
      </p>
      <button onClick={toggleInfo} className="electric-button">
        {showMore ? 'Slėpti informaciją' : 'Daugiau informacijos'}
      </button>
      {showMore && (
        <div className="more-info">
          <h2 className="sub-title">Privalumai:</h2>
          <ul>
            <li>Greitas ir efektyvus energijos perdavimas.</li>
            <li>Mažesnis triukšmas ir vibracija.</li>
          </ul>
          <h2 className="sub-title">Trūkumai:</h2>
          <ul>
            <li>Aukštos gamybos sąnaudos.</li>
            <li>Reikia specializuotos infrastruktūros įkrovimui.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Electric;
