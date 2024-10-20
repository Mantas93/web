import React, { useState } from 'react';
import './Home.css';
import manualImage from '../images/manual-transmission.jpg'; // Atnaujinkite kelią, jei reikia
import autoImage from '../images/automatic-transmission.jpg'; // Atnaujinkite kelią, jei reikia
import cvtImage from '../images/cvt-transmission.jpg'; // Atnaujinkite kelią, jei reikia
import dsgImage from '../images/dsg-transmission.jpg'; // Atnaujinkite kelią, jei reikia
import amtImage from '../images/amt-transmission.jpg'; // Atnaujinkite kelią, jei reikia
import ecvtImage from '../images/ecvt-transmission.jpg'; // Atnaujinkite kelią, jei reikia

const Home = () => {
  const [showManualInfo, setShowManualInfo] = useState(false);
  const [showAutoInfo, setShowAutoInfo] = useState(false);
  const [showCVTInfo, setShowCVTInfo] = useState(false);
  const [showDSGInfo, setShowDSGInfo] = useState(false);
  const [showAMTInfo, setShowAMTInfo] = useState(false);
  const [showeCVTInfo, seteCVTInfo] = useState(false);

  const toggleManualInfo = () => setShowManualInfo(!showManualInfo);
  const toggleAutoInfo = () => setShowAutoInfo(!showAutoInfo);
  const toggleCVTInfo = () => setShowCVTInfo(!showCVTInfo);
  const toggleDSGInfo = () => setShowDSGInfo(!showDSGInfo);
  const toggleAMTInfo = () => setShowAMTInfo(!showAMTInfo);
  const toggleeCVTInfo = () => seteCVTInfo(!showeCVTInfo);

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
            <button onClick={toggleManualInfo}>
              {showManualInfo ? "Slėpti informaciją" : "Daugiau informacijos"}
            </button>
            {showManualInfo && (
              <p>
                Mechaninės transmisijos suteikia vairuotojui didesnę kontrolę 
                ir leidžia pasirinkti pageidaujamą pavarą, tačiau reikalauja 
                daugiau įgūdžių.
              </p>
            )}
          </div>
        </div>

        {/* Automatinė transmisija */}
        <div className="transmission">
          <img src={autoImage} alt="Automatinė transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>Automatinė transmisija</h3>
            <p>Užtikrina sklandesnį vairavimą.</p>
            <button onClick={toggleAutoInfo}>
              {showAutoInfo ? "Slėpti informaciją" : "Daugiau informacijos"}
            </button>
            {showAutoInfo && (
              <p>
                Automatinės transmisijos yra patogios ir leidžia vairuotojui 
                daugiau dėmesio skirti keliui, tačiau jos gali būti brangesnės 
                remontui.
              </p>
            )}
          </div>
        </div>

        {/* CVT transmisija */}
        <div className="transmission">
          <img src={cvtImage} alt="CVT transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>CVT (Continuously Variable Transmission)</h3>
            <p>Siūlo nuolatinį greičio keitimą.</p>
            <button onClick={toggleCVTInfo}>
              {showCVTInfo ? "Slėpti informaciją" : "Daugiau informacijos"}
            </button>
            {showCVTInfo && (
              <p>
                CVT sistema užtikrina sklandų ir efektyvų galios perdavimą, tačiau 
                jos gali būti sudėtingesnės techniniam aptarnavimui.
              </p>
            )}
          </div>
        </div>

        {/* DSG transmisija */}
        <div className="transmission">
          <img src={dsgImage} alt="DSG transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>DSG (Direct Shift Gearbox)</h3>
            <p>Greitas ir efektyvus pavarų keitimas.</p>
            <button onClick={toggleDSGInfo}>
              {showDSGInfo ? "Slėpti informaciją" : "Daugiau informacijos"}
            </button>
            {showDSGInfo && (
              <p>
                DSG sistema leidžia greitai keisti pavaras, suteikdama sklandžią 
                vairavimo patirtį ir didesnį našumą.
              </p>
            )}
          </div>
        </div>

        {/* AMT transmisija */}
        <div className="transmission">
          <img src={amtImage} alt="AMT transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>AMT (Automated Manual Transmission)</h3>
            <p>Automatizuota mechaninė transmisija.</p>
            <button onClick={toggleAMTInfo}>
              {showAMTInfo ? "Slėpti informaciją" : "Daugiau informacijos"}
            </button>
            {showAMTInfo && (
              <p>
                AMT suteikia mechaninės transmisijos kontrolę su automatizuotu 
                pavarų keitimu, leidžiančiu vairuotojui patogiai vairuoti.
              </p>
            )}
          </div>
        </div>

        {/* eCVT transmisija */}
        <div className="transmission">
          <img src={ecvtImage} alt="eCVT transmisija" className="transmission-image" />
          <div className="transmission-info">
            <h3>eCVT (Electronic Continuously Variable Transmission)</h3>
            <p>Efektyvus hibridinių automobilių sprendimas.</p>
            <button onClick={toggleeCVTInfo}>
              {showeCVTInfo ? "Slėpti informaciją" : "Daugiau informacijos"}
            </button>
            {showeCVTInfo && (
              <p>
                eCVT sistema optimizuoja variklio ir elektros variklio darbą, 
                užtikrindama efektyvų energijos panaudojimą.
              </p>
            )}
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
