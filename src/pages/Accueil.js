import React, { useEffect, useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';

function Accueil() {
  const [backgroundColor, setBackgroundColor] = useState('#f7efd2');
  const [color, setColor] = useState('black');
  const [transform, setTransform] = useState('translateX(500px)');
  const [opacity, setOpacity] = useState('0');
  const [transform1, setTransform1] = useState('translateX(-500px)');
  const [opacity1, setOpacity1] = useState('0');
  const [transform2, setTransform2] = useState('translateY(-80px)');
  const [opacity2, setOpacity2] = useState('0');

  useEffect(() => {
    setTimeout(() => {
      setTransform('translateX(0)');
      setOpacity('1');
    }, 500);
    setTimeout(() => {
      setTransform1('translateX(0)');
      setOpacity1('1');
    }, 1000);
    setTimeout(() => {
      setTransform2('translateY(0)');
      setOpacity2('1');
    }, 1500);
    window.addEventListener('scroll', handleScroll);
  }, [backgroundColor]);

  React.useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY >= window.innerHeight / 5) {
      setBackgroundColor('black');
      setColor('#f7efd2');
    } else {
      setBackgroundColor('#f7efd2');
      setColor('black');
    }
  };

  return (
    <div>
      <div
        class="divHeader d-flex align-items-end"
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        <div
          className="col-sm-12 divTexte"
          style={{ transition: 'all 0.5s ease' }}
        >
          <p
            className="m-0 big text-center"
            style={{ transform: transform, opacity: opacity }}
          >
            Bonjour,
            <br />
            Vous.
          </p>
          <p
            className="mt-5 description text-center"
            style={{ transform: transform1, opacity: opacity1 }}
          >
            👋 Bienvenue sur mon portfolio, Je suis ravi de vous présenter mes
            réalisations, <br />
            mes compétences et mon parcours professionnel à travers ce
            portfolio.
          </p>
          <p
            className="mt-5 text-center "
            style={{ transform: transform2, opacity: opacity2 }}
          >
            <BsArrowDown size={60} />
          </p>
        </div>
      </div>
      <div className="section">
        
      </div>
    </div>
  );
}

export default Accueil;
