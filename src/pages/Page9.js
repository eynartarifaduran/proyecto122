
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen1a from '../img/gal1.jpg';
import imagen2a from '../img/gal2.jpg';
import imagen3a from '../img/gal3.jpg';
import imagen4a from '../img/gal4.jpg';
import imagen5a from '../img/gal5.jpg';
import imagen6a from '../img/gal6.jpg';
import imagen7a from '../img/gal7.jpg';
import imagen8a from '../img/gal8.jpg';
import imagen9a from '../img/gal9.jpg';
import imagen10a from '../img/gal10.jpg';
import imagen11a from '../img/gal11.jpg';
import imagen12a from '../img/gal12.jpg';
import '../App.css'; 


const Page9 = () => {
    useEffect(() => {
    
        document.body.classList.add('page9-body');
    
        
        return () => {
          document.body.classList.remove('page9-body');
        };
      }, []);
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Section style={{ flex: 1 }}>
          <h2>Historias Gastronómicas</h2>
          <p>Historia Del Lomo Saltado</p>
          <a href="https://www.youtube.com/watch?v=K8ITFP_gW9s" target="_blank" rel="noopener noreferrer">
            Ver
          </a>
          
        </Section>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Carousel style={{ width: '85%' }}>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen1a} alt="Primer plato típico" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen2a} alt=" " />
              <Carousel.Caption>
                <h3> </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
              <img className="d-block w-100" src={imagen3a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen4a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen5a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen6a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen7a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen8a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen9a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen10a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen11a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={imagen12a} alt="" />
              <Carousel.Caption>
                <h3></h3>
              </Carousel.Caption>
            </Carousel.Item>


            </Carousel>
        </div>

        <Section style={{ flex: 1 }}>
        
          <h2 style={{ color: '' }}>Conéctate en Facebook</h2>
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

export default Page9;
