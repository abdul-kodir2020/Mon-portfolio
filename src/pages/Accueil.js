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
  const [height, setHeight] = useState('0%');

  useEffect(() => {
    setTimeout(() => {
      setHeight('100%')
    }, 500);
    setTimeout(() => {
      if (window.innerWidth <= 800) {
        setTransform('translateX(0)');
      }else{
        setTransform('translateX(80px)');
      }
      setOpacity('1');
    }, 1000);
    setTimeout(() => {
      setTransform1('translateX(0)');
      setOpacity1('1');
    }, 1500);
    setTimeout(() => {
      setTransform2('translateY(0)');
      setOpacity2('1');
    }, 2000);
    window.addEventListener('scroll', handleScroll);
  }, [backgroundColor]);

  React.useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    
  };

  return (
    <div>
      <div
        class="divHeader d-flex align-items-end"
        style={{ backgroundColor: "#f7efd2"}}
      >
        <div
          className="col-sm-12 divTexte d-flex flex-column justify-content-between align-items-center"
          style={{ transition: 'all 0.5s ease' }}
        >
          <div className='d-flex justify-content-center align-items-center col-12' style={{'height':'50vh'}}>
          <p
            className="m-0 big "
            style={{ transform: transform, opacity: opacity }}
          >
            Hey, je suis
            <br />
            Abdul Mounirou,<br/>
            Dévéloppeur<br/>Fullstack.
          </p>
            <div className='image shadow' style={{height:height}}>

            </div>
          </div>
          <div>
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
      </div>
      
      <div className='section1'>
        <div className='col-md-6 col-sm-12'>
          <h1>Projet 1</h1>
        </div>
      </div>
      <div className='section2'>
        <div className='col-md-6 col-sm-12'>
        <h1>Projet 2</h1>
          
        </div>
      </div>
      <div className='section3'>
        <div className='col-md-6 col-sm-12'>
        <h1>Projet 3</h1>
          
        </div>
      </div>
      
      <div className='moi'>

      </div>
    </div>
  );
}

export default Accueil;
