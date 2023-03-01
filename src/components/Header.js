import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll'
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

    const li = document.querySelectorAll(".nav-link")

    
  };

  return (
    <div
      className="absolute shadow"
      style={{ position: position.position, top: position.top }}
    >
      <nav>
        <Link to="#"  className="site-title">
          Mon Portfolio <span className="point">.</span>
        </Link>
        <ul>
          <li className="nav-link">
            <Link to="home" spy={true} smooth={true} offset={-50} duration={300}>Accueil</Link>
          </li>
          <li className="nav-link">
            <Link to="projets" spy={true} smooth={true} offset={0} duration={300}>Projets</Link>
          </li>
          <li className="nav-link">
            <Link to="moi" spy={true} smooth={true} offset={50} duration={300}>Moi</Link>
          </li>
          <li className="nav-link">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={300}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
