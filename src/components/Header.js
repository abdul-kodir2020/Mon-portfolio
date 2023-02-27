import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [position, setPosition] = useState({});

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [position]);

  React.useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY >= window.innerHeight / 5) {
      setPosition({ position: 'sticky', top: '0' });
    } else {
      setPosition('');
    }

    
  };

  return (
    <div
      className="absolute shadow"
      style={{ position: position.position, top: position.top }}
    >
      <nav>
        <Link to="/" className="site-title">
          Mon Portfolio <span className="point">.</span>
        </Link>
        <ul>
          <li className="nav-link active">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav-link">
            <Link to="/a-propos">Projets</Link>
          </li>
          <li className="nav-link">
            <Link to="/a-propos">Moi</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
