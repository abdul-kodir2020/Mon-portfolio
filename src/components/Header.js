import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="absolute">
      <nav>
        <Link to="/" className="site-title">
          Mon Portflolio <span className="point">.</span>
        </Link>
        <ul>
          <li className="nav-link active">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav-link">
            <Link to="/a-propos">A Propos</Link>
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
