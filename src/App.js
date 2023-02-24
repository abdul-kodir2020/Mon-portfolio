import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import APropos from './pages/APropos';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
