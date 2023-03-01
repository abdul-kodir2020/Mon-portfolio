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
        className="divHeader d-flex align-items-end"
        style={{ backgroundColor: "#f7efd2"}}
        id='home'
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
            className="mt-2 description text-center"
            style={{ transform: transform1, opacity: opacity1 }}
          >
            👋 Bienvenue sur mon portfolio, Je suis ravi de vous présenter mes
            réalisations, <br />
            mes compétences et mon parcours professionnel à travers ce
            portfolio.
          </p>
          <p
            className="mt-2 text-center "
            style={{ transform: transform2, opacity: opacity2 }}
          >
            <BsArrowDown size={60} />
          </p>
          </div>
        </div>
      </div>
      <div id='projets'>
        {/* <div className='section1' >
          <div className='col-md-6 col-sm-12 px-5'>
            <div className='projet-info'>
              <span className='projet-number'>
                01
              </span>
              <p>
                Mini projet fait pendant l'apprentissage de react
              </p>
            </div>
          </div>
        </div> */}
        <div className='section2'>
          <div className='col-md-6 col-sm-12 px-5'>
            <div className='projet-info'>
              <span className='projet-number'>
                01
              </span>
              <p>
              Clone de whatsapp avec la fonctionnalité méssagérie<br/>
              firebase | react | bootstrap
              </p>
              <a type="button" href="https://clone1whatsapp.netlify.app/" target='_blank' class="btn btn-outline-light">voir le projet</a>
            </div>
          </div>
        </div>
        {/* <div className='section3'>
          <div className='col-md-6 col-sm-12 px-5'>
            <div className='projet-info'>
              <span className='projet-number'>
                03
              </span>
              <p>
                Mini projet fait pendant l'apprentissage de react
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className='moi' id='moi'>
        <div className='container'>
          <h3> A propos de moi</h3>
          <div className='row mb-5'>
            <div className='col-md-6 col-sm-12 px-3'>
              <h1 className='font-weight-bold'>📚 Education</h1>
              <div className='w-100'>
                <div className='w-100 pb-4 mt-5 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Estiam Paris</span><br/>
                    <div className='row text-muted'>
                      <span className='col-md-9 col-sm-12'>Bachelor of Technology - BTech</span>
                      <span className='col-md-3'>2022 - En cours...</span>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Pigier Côte d'ivoire(Abidjan)</span><br/>
                    <div className='row text-muted'>
                      <span className='col-md-9 col-sm-12'>Licence réseaux et génie logiciel</span>
                      <span className='col-md-3 '>2017 - 2021</span>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Lycée moderne de Port-bouet(Abidjan)</span><br/>
                    <div className='row text-muted'>
                      <span className='col-md-9 col-sm-12'>Baccalaureat serie D</span>
                      <span className='col-md-3'>2016 - 2017</span>
                    </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 px-3'>
              <h1 className='font-weight-bold'>💼 Expériences</h1>
              <div className='w-100'>
                <div className='w-100 pb-4 mt-5 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Agence Digital Space(Abidjan)</span><br/>
                    <div className='row text-muted'>
                      <span className='col-md-8 col-sm-12'>Développeur Full Stack</span>
                      <span className='col-md-4'>Mars - juillet 2022</span>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Soft Artisan · Freelance</span><br/>
                    <div className='row text-muted'>
                      <span className='col-md-8 col-sm-12'>Développeur Full Stack</span>
                      <span className='col-md-4 '>janv. 2020 - janv. 2021</span>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}} title="...et de l'enfant.">Ministère de la famille, de la femme...</span><br/>
                    <div className='row text-muted'>
                      <span className='col-md-8 col-sm-12'>Développeur logiciels</span>
                      <span className='col-md-4'>oct. 2019 - janv. 2020</span>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className='row mt-5'>
          <h1 className='font-weight-bold'>💻 Compétences</h1>

            <div className='col-md-6 col-sm-12 px-3'>
              <div className='w-100'>
                <div className='w-100 pb-4 mt-5 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>HTML/CSS</span><br/>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{"width": "80%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Javascript</span><br/>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{"width": "80%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>React</span><br/>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{"width": "50%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Langage C</span><br/>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 px-3'>
              <div className='w-100'>
                <div className='w-100 pb-4 mt-5 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>PHP</span><br/>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{"width": "70%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Laravel</span><br/>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{"width": "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Python</span><br/>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className='w-100 pb-4 mt-4 border-bottom'>
                    <span style={{'fontSize':'35px','fontWeight':'lighter'}}>Django</span><br/>
                    <div class="progress">
                      <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{"width": "50%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className='contact text-white mb-0' id='contact'>
        <div className=''>
          
          <h1>Voulez-vous plus d'informations sur moi ?</h1>
          <h1>Contactez-Moi.</h1>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
