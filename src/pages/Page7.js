// src/pages/Page7.js
import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Page7 = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Section style={{ flex: 1 }}>
          <h2>Historias Gastronómicas</h2>
          <p>Historia Del Lomo Saltado</p>
          <a href="https://www.youtube.com/watch?v=ejexample" target="_blank" rel="noopener noreferrer">
            Ver
          </a>
          {/* Agrega más historias... */}
        </Section>

        <div style={{ flex: 1 }}>
          <h1>Página 7</h1>
          {/* Contenido específico de la página */}
        </div>

        <Section style={{ flex: 1 }}>
          <h2>Conéctate en Facebook</h2>
          <a href="https://www.facebook.com/ejemplo7" target="_blank" rel="noopener noreferrer">
            Ejemplo 7 en Facebook
          </a>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default Page7;
