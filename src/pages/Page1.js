import React, { useEffect } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import imagen1 from '../img/silpancho.png';
import imagen2 from '../img/sajta.png';
import imagen3 from '../img/charque.png';
import imagen4 from '../img/majadito.png';
import imagen5 from '../img/kala.png';
import imagen6 from '../img/locro.png';
import imagen7 from '../img/somo.png';
import imagen8 from '../img/mondongo.png';
import imagen9 from '../img/saice.png';

const Page1 = () => {
    useEffect(() => {
      
      document.body.classList.add('page1-body');
  
      
      return () => {
        document.body.classList.remove('page1-body');
      };
    }, []);
  
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Section style={{ flex: 1 }}>
        
          <h2>Historias Gastronómicas</h2>
          <p>
            <a href="https://es.scribd.com/document/501026635/Historia-de-La-Sajta-de-Pollo" target="_blank" rel="noopener noreferrer">
              HISTORIA DE LA SAJTA DE POLLO
            </a>
          </p>
        </Section>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Carousel style={{ width: '50%' }}>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen1} alt="Primer plato típico" />
              <Carousel.Caption>
                <h3>Cochabamba</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen2} alt="Segundo plato típico" />
              <Carousel.Caption>
                <h3>La Paz</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen3} alt="Segundo plato típico" />
              <Carousel.Caption>
                <h3>Oruro</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen4} alt="Segundo plato típico" />
              <Carousel.Caption>
                <h3>Santa Cruz</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen5} alt="Segundo plato típico" />
              <Carousel.Caption>
                <h3>Potosi</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen6} alt="Segundo plato típico" />
              <Carousel.Caption>
                <h3>Beni</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen7} alt="Segundo plato típico" />
              <Carousel.Caption>
                <h3>Pando</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen8} alt="Segundo plato típico" />
              <Carousel.Caption>
                <h3>Chuquisaca</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen9} alt="Segundo plato típico" />
              <Carousel.Caption>
                <h3>Tarija</h3>
              </Carousel.Caption>
            </Carousel.Item>
         
          </Carousel>
        </div>

        <Section style={{ flex: 1 }}>
         
          <h2>Conéctate en Facebook</h2>
          <a href="https://www.facebook.com/gastronomiaBolivia" target="_blank" rel="noopener noreferrer">
            Gastronomia en Bolivia
          </a>
          <br />
          <a href="https://www.facebook.com/groups/588621854500228/" target="_blank" rel="noopener noreferrer">
            Gastronomia en Bolivia2
          </a>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default Page1;
