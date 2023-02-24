import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <span className="footer-title">
        Mon Portflolio <span className="point">.</span>
      </span>
      <ul>
        <li>
          <a href="">Linkedin</a>
        </li>
        <li>
          <a href="">Github</a>
        </li>
        <li>
          <a href="">Gmail</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
