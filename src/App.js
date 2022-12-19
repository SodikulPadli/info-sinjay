import './App.css';
import HomePage from './pages/HomePage';
import UmkmPage from './pages/UmkmPage';
import HiburanPage from './pages/HiburanPage';
import Wilayah from './pages/Wilayah';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/umkm" element={<UmkmPage />} />
        <Route path="/hiburan" element={<HiburanPage />} />
        <Route path="/wilayah" element={<Wilayah />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
