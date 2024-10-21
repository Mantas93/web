import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import manualImage from '../images/manual-transmission.jpg';
import autoImage from '../images/automatic-transmission.jpg';
import cvtImage from '../images/cvt-transmission.jpg';
import dsgImage from '../images/dsg-transmission.jpg';
import amtImage from '../images/amt-transmission.jpg';
import ecvtImage from '../images/ecvt-transmission.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Automobilių Transmisijų Aktualumas</h1>
      <p>
        Automobilių transmisijos yra viena iš svarbiausių transporto priemonių komponentų,
        atsakingų už galios perdavimą iš variklio į ratus. Teisinga transmisijos pasirinkimas gali 
        turėti didelę įtaką automobilio našumui ir vairavimo patirčiai.
      </p>
      <h2>Tipai</h2>
      <div className="transmission-types">
        {/* Mechaninė transmisija */}
        <div className="transmission">
          <img src={manualImage} alt="Mechaninė transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>Mechaninė transmisija</h3>
            <p>Populiari dėl savo paprastumo ir patikimumo.</p>
            <Link to="/manual" className="info-link">Daugiau informacijos</Link>
          </div>
        </div>

        {/* Automatinė transmisija */}
        <div className="transmission">
          <img src={autoImage} alt="Automatinė transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>Automatinė transmisija</h3>
            <p>Užtikrina sklandesnį vairavimą.</p>
            <Link to="/automatic" className="info-link">Daugiau informacijos</Link>
          </div>
        </div>

        {/* CVT transmisija */}
        <div className="transmission">
          <img src={cvtImage} alt="CVT transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>CVT (Continuously Variable Transmission)</h3>
            <p>Siūlo nuolatinį greičio keitimą.</p>
            <Link to="/cvt" className="info-link">Daugiau informacijos</Link>
          </div>
        </div>

        {/* DSG transmisija */}
        <div className="transmission">
          <img src={dsgImage} alt="DSG transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>DSG (Direct Shift Gearbox)</h3>
            <p>Greitas ir efektyvus pavarų keitimas.</p>
            <Link to="/dsg" className="info-link">Daugiau informacijos</Link>
          </div>
        </div>

        {/* AMT transmisija */}
        <div className="transmission">
          <img src={amtImage} alt="AMT transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>AMT (Automated Manual Transmission)</h3>
            <p>Automatizuota mechaninė transmisija.</p>
            <Link to="/amt" className="info-link">Daugiau informacijos</Link>
          </div>
        </div>

        {/* eCVT transmisija */}
        <div className="transmission">
          <img src={ecvtImage} alt="eCVT transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>eCVT (Electronic Continuously Variable Transmission)</h3>
            <p>Efektyvus hibridinių automobilių sprendimas.</p>
            <Link to="/ecvt" className="info-link">Daugiau informacijos</Link>
          </div>
        </div>
      </div>
      <h2>Aktualumas</h2>
      <p>
        Šiuo metu automobilių transmisijos technologijos sparčiai vystosi, 
        todėl svarbu pasirinkti tinkamą sistemą pagal savo poreikius.
      </p>
    </div>
  );
};

export default Home;
