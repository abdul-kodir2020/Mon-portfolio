import React, { useEffect, useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';

function Accueil() {
  const [backgroundColor, setBackgroundColor] = useState('black');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    console.log(window.scrollY + ' : ' + window.innerHeight / 2);
    if (window.scrollY >= window.innerHeight / 2) {
      setBackgroundColor('black');
    } else {
      setBackgroundColor('#F5F5F5');
    }
  };

  return (
    <div>
      <div
        class="divHeader d-flex align-items-end"
        style={{ color: backgroundColor }}
      >
        <div className="col-sm-12">
          <p className="m-0 big">
            Bonjour,
            <br />
            Toi
          </p>
          <p className="mt-5 description">
            👋 Bienvenue sur mon portfolio, je suis Abdul Mounirou et <br />
            je prépare un bachelor en dévéloppement web et Mobile.
          </p>
          <p className="mt-5 text-center ">
            <BsArrowDown size={60} />
          </p>
        </div>
      </div>
      <div className="section"></div>
    </div>
  );
}

export default Accueil;
