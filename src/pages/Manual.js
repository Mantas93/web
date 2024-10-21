import React, { useState } from 'react';
import manualImage from '../images/manual-transmission.jpg'; // Atitinkamo paveikslėlio kelias
import '../css/manual.css'; // Importuojame CSS failą

const Manual = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="manual-container">
      <h1 className="manual-title">Mechaninė Pavarų Dėžė</h1>
      <img src={manualImage} alt="Mechaninė pavarų dėžė" className="manual-image" />
      <p className="manual-description">
        Mechaninės pavarų dėžės yra žinomos dėl savo paprastumo, patikimumo ir vairuotojo kontrolės.
        Vairuotojas pats pasirenka pavaras, kas suteikia didesnę kontrolę virš automobilio dinamikos.
      </p>
      <button onClick={toggleInfo} className="manual-button">
        {showMore ? 'Slėpti informaciją' : 'Daugiau informacijos'}
      </button>
      {showMore && (
        <div className="more-info">
          <h2 className="sub-title">Privalumai:</h2>
          <ul>
            <li>Didelė kontrolė ir vairavimo patirtis.</li>
            <li>Mažesnės priežiūros sąnaudos.</li>
            <li>Geresnis kuro efektyvumas.</li>
          </ul>
          <h2 className="sub-title">Trūkumai:</h2>
          <ul>
            <li>Reikalauja daugiau įgūdžių vairuoti.</li>
            <li>Ne tokia patogi kaip automatinė pavarų dėžė.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Manual;
