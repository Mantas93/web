import React, { useState } from 'react';
import cvtImage from '../images/cvt-transmission.jpg'; // Atitinkamo paveikslėlio kelias
import '../css/CVT.css'; // Importuojame CSS failą

const CVT = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="cvt-container">
      <h1 className="cvt-title">CVT (Continuously Variable Transmission)</h1>
      <img src={cvtImage} alt="CVT pavarų dėžė" className="cvt-image" />
      <p className="cvt-description">
        CVT pavarų dėžės siūlo nuolatinį greičio keitimą ir sklandų vairavimą.
      </p>
      <button onClick={toggleInfo} className="cvt-button">
        {showMore ? 'Slėpti informaciją' : 'Daugiau informacijos'}
      </button>
      {showMore && (
        <div className="more-info">
          <h2 className="sub-title">Privalumai:</h2>
          <ul>
            <li>Sklandus pavarų keitimas.</li>
            <li>Efektyvus kuro naudojimas.</li>
          </ul>
          <h2 className="sub-title">Trūkumai:</h2>
          <ul>
            <li>Gali būti mažiau reaguojanti nei mechaninė.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CVT;
