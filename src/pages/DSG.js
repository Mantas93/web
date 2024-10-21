import React, { useState } from 'react';
import dsgImage from '../images/dsg-transmission.jpg'; // Atitinkamo paveikslėlio kelias
import '../css/DSG.css'; // Importuojame CSS failą

const DSG = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="dsg-container">
      <h1 className="dsg-title">DSG (Direct Shift Gearbox)</h1>
      <img src={dsgImage} alt="DSG pavarų dėžė" className="dsg-image" />
      <p className="dsg-description">
        DSG pavarų dėžės užtikrina greitą ir efektyvų pavarų keitimą.
      </p>
      <button onClick={toggleInfo} className="dsg-button">
        {showMore ? 'Slėpti informaciją' : 'Daugiau informacijos'}
      </button>
      {showMore && (
        <div className="more-info">
          <h2 className="sub-title">Privalumai:</h2>
          <ul>
            <li>Greitas pavarų keitimas.</li>
            <li>Geresnis našumas.</li>
          </ul>
          <h2 className="sub-title">Trūkumai:</h2>
          <ul>
            <li>Didesnės priežiūros sąnaudos.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DSG;
