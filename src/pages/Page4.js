

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Page4 = () => {
        useEffect(() => {
          
          document.body.classList.add('page4-body');
      
          
          return () => {
            document.body.classList.remove('page4-body');
          };
        }, []);
    
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Section style={{ flex: 1 }}>
          <h2>Historias Gastronómicas</h2>
          <p>Historia De La Llajwa</p>
          <a href="https://www.lostiempos.com/especial-multimedia/20180910/llajwa
          -idilio-paladar-boliviano#:~:text=Su%20nombre%20proviene%20del%20quechua,
          la%20vida%2C%20como%20el%20aj%C3%AD." target="_blank" rel="noopener noreferrer">
            Ver
          </a>
          
        </Section>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/N7lRPB_f1mo"
              title="Video 1"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <p>Guia de como Realizar sajta boliviana</p>
          </div>

 
          <div style={{ marginTop: '20px' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RyyWzN1aet8"
              title="Video 2"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <p>Guia de como Realizar silpancho cochabambino</p>
          </div>

          <div style={{ marginTop: '20px' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wbOBTLZ_0uc"
              title="Video 3"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <p>Guias de como Realizar Majadito</p>
          </div>

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

export default Page4;
