import React, { useState } from 'react';
import semiAutomaticImage from '../images/amt-transmission.jpg'; // Atitinkamo paveikslėlio kelias
import '../css/SemiAutomatic.css'; // Importuojame CSS failą

const SemiAutomatic = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="semi-automatic-container">
      <h1 className="semi-automatic-title">Semi-automatinė Pavarų Dėžė</h1>
      <img src={semiAutomaticImage} alt="Semi-automatinė pavarų dėžė" className="semi-automatic-image" />
      <p className="semi-automatic-description">
        Semi-automatinės pavarų dėžės suteikia galimybę vairuotojui keisti pavaras rankiniu būdu, 
        tačiau su automatizuotu mechanizmu.
      </p>
      <button onClick={toggleInfo} className="semi-automatic-button">
        {showMore ? 'Slėpti informaciją' : 'Daugiau informacijos'}
      </button>
      {showMore && (
        <div className="more-info">
          <h2 className="sub-title">Privalumai:</h2>
          <ul>
            <li>Didelis vairavimo malonumas su kontroliu.</li>
            <li>Greitesnis pavarų keitimas nei tradicinėse mechaninėse pavarų dėžėse.</li>
          </ul>
          <h2 className="sub-title">Trūkumai:</h2>
          <ul>
            <li>Reikalauja tam tikrų įgūdžių vairuoti.</li>
            <li>Gali būti sudėtinga kai kuriems vairuotojams.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SemiAutomatic;
