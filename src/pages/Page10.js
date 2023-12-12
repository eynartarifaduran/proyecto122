
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Credits from '../components/Credits';
import '../App.css'; 

const Page10 = () => {
  useEffect(() => {
    
    document.body.classList.add('page10-body');

    
    return () => {
      document.body.classList.remove('page10-body');
    };
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <Section style={{ flex: 1 }}>
  <h2>Historias Gastronómicas</h2>
  <p>
    <a href="https://www.youtube.com/watch?v=l2JDGvbU6Yk" target="_blank" rel="noopener noreferrer">
      HISTORIA DEL CHAIRO
    </a>
  </p>
</Section>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
            <Credits />
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

     

      </div>

      <Footer />
    </div>
  );
};

export default Page10;
