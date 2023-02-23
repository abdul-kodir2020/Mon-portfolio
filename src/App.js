import React from 'react';
import './style.css';
import Accueil from './pages/Accueil';
import Header from './components/Header';


export default function App() {
  return (
    <div>
      <Header/>
      <Accueil />
    </div>
  );
}
