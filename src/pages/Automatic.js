import React, { useState } from 'react';
import automaticImage from '../images/automatic-transmission.jpg'; // Patikrinkite paveikslėlio kelią
import '../css/Automatic.css'; // Patikrinkite, ar CSS failas egzistuoja

const Automatic = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="automatic-container">
      <h1 className="automatic-title">Automatinė Pavarų Dėžė</h1>
      <img src={automaticImage} alt="Automatinė pavarų dėžė" className="automatic-image" />
      <p className="automatic-description">
        Automatinės pavarų dėžės suteikia vairuotojui patogumą ir sklandų vairavimą, nes pavaros keičiasi automatiškai.
      </p>
      <button onClick={toggleInfo} className="automatic-button">
        {showMore ? 'Slėpti informaciją' : 'Daugiau informacijos'}
      </button>
      {showMore && (
        <div className="more-info">
          <h2 className="sub-title">Privalumai:</h2>
          <ul>
            <li>Paprastesnis vairavimas, ypač miesto sąlygomis.</li>
            <li>Mažesnis nuovargis ilgose kelionėse.</li>
            <li>Dažnai geresnis našumas ir efektyvumas.</li>
          </ul>
          <h2 className="sub-title">Trūkumai:</h2>
          <ul>
            <li>Didesnės priežiūros sąnaudos.</li>
            <li>Mažesnė kontrolė už pavarų keitimą.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Automatic;
