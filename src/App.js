import './css/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Galery from './pages/Galery';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './pages/Navbar'; 
import Footer from './pages/Footer';
import Manual from './pages/Manual'; 
import Automatic from './pages/Automatic'; 
import SemiAutomatic from './pages/SemiAutomatic'; // Pridėtas maršrutas semi-automatinėms pavarų dėžėms
import CVT from './pages/CVT'; // Pridėtas maršrutas CVT pavarų dėžėms
import DSG from './pages/DSG'; // Pridėtas maršrutas DSG pavarų dėžėms
import Electric from './pages/Electric'; // Pridėtas maršrutas elektrinėms pavarų dėžėms

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/about" element={<About />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/automatic" element={<Automatic />} />
          <Route path="/semi-automatic" element={<SemiAutomatic />} /> {/* Pridėtas maršrutas semi-automatinėms pavarų dėžėms */}
          <Route path="/cvt" element={<CVT />} /> {/* Pridėtas maršrutas CVT pavarų dėžėms */}
          <Route path="/dsg" element={<DSG />} /> {/* Pridėtas maršrutas DSG pavarų dėžėms */}
          <Route path="/electric" element={<Electric />} /> {/* Pridėtas maršrutas elektrinėms pavarų dėžėms */}
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
