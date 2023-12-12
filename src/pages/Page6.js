
import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Card, Button } from 'react-bootstrap';

const Page6 = () => {
 
  const typicalDishes = [
    {
      name: 'Salteñas',
      image: 'https://www.cocina-boliviana.com/base/stock/Recipe/232-image/232-image_web.jpg',
      description: 'Empanadas boalivianas rellenas de carne, pollo o cerdo con verduras y condimentos.',
    },
    {
      name: 'Silpancho',
      image: 'https://i.pinimg.com/originals/b5/c9/f1/b5c9f1ed007ed6e2ae4d7507c515d2ec.jpg',
      description: 'Plato típico de Cochabamba que consiste en carne empanizada, arroz, papas y huevo frito.',
    },
    {
      name: 'Llajwa',
      image: 'https://www.petitchef.es/imgupl/recipe/picante-boliviano-llajwa--md-169952p253900.jpg',
      description: 'Salsa picante boliviana hecha con tomates, locotos (ajíes) y condimentos.',
    },
   
  ];

  return (
    <div>
      <Header />

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      
        <Section style={{ flex: 1 }}>
          <h2>Historias Gastronómicas</h2>
          <p>Historia Del Chuño</p>
          <a href="https://www.youtube.com/watch?v=3zoCdWxUk3w" target="_blank" rel="noopener noreferrer">
            Ver
          </a>
          
        </Section>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%' }}>
          <Section style={{ width: '100%' }}>
            <h2>Platos Típicos de Bolivia</h2>
            <p>Descubre la deliciosa variedad de platos tradicionales bolivianos.</p>
          </Section>

    
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {typicalDishes.map((dish, index) => (
              <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dish.image} />
                <Card.Body>
                  <Card.Title>{dish.name}</Card.Title>
                  <Card.Text>{dish.description}</Card.Text>
                  
                </Card.Body>
              </Card>
            ))}
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

export default Page6;
