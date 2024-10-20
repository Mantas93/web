import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Galery from './pages/Galery';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './Navbar'; // Pridėkite Navbar
import Footer from './pages/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> {/* Naudokite Navbar komponentą */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
