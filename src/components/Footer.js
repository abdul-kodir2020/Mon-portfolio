import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <span className="footer-title">
        Mon Portflolio<span className="point">.</span>
      </span>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/abdul-kodir-adewale-mounirou-aa3374222/" target='_blank'>Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/abdul-kodir2020" target='_blank'>Github</a>
        </li>
        <li>
          <a href="mailto:votreadresse@mail.fr" target="_blank">Gmail</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
