
import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import PlatosForm from '../pages/PlatosForm';
import backgroundImg from '../img/salteñas.jpeg'; 

const Page2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Section style={{ flex: 1 }}>
      
          <h2 style={{ color: '#000000' }}>Historias Gastronómicas</h2>
          <p style={{ color: '#000000' }}>Historia De la papa</p>
          <a href="https://www.youtube.com/watch?v=L7FsuMlhSQk" target="_blank" rel="noopener noreferrer">
            Ver en YOUTUBE
          </a>
         
        </Section>

        <div style={{ flex: 1 }}>
       
          
          <div style={{width: '400px', border: '1px solid #ccc', padding: '20px', margin: 'auto' }}>
            <h2 style={{ color: '#000000' }}>Envía tu Propia Receta</h2>
            <PlatosForm />
          </div>
        </div>

        <Section style={{ flex: 1 }}>
     
          <h2 style={{ color: '#000000' }}>Conéctate en Facebook</h2>
          <a href="https://www.facebook.com/gastronomiaBolivia" target="_blank" rel="noopener noreferrer">
            Gastronomia en Bolivia
          </a>
          <br></br>
          <a href="https://www.facebook.com/groups/588621854500228/" target="_blank" rel="noopener noreferrer">
            Gastronomia en Bolivia2
          </a>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default Page2;
