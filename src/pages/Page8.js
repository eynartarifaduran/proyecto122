
import React, { useState } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Form, Button, Card } from 'react-bootstrap';

const Page8 = () => {
  
  const [comentarios, setComentarios] = useState([]);

  
  const handleEnviarComentario = (e) => {
    e.preventDefault();
    
    
    const comentario = e.target.elements.comentario.value;

    
    if (comentario.trim() === '') {
      return;
    }

    
    setComentarios([...comentarios, comentario]);

   
    e.target.elements.comentario.value = '';
  };

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

        <Section style={{ flex: 1, margin: '0 20px' }}>
          <h2>Comentarios y Reseñas</h2>
          <p>Comparte tu experiencia con los platos típicos bolivianos.</p>

   
          <Form onSubmit={handleEnviarComentario}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Deja tu comentario:</Form.Label>
              <br></br>
              <Form.Control as="textarea" name="comentario" rows={3} />
              <br></br>
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar Comentario
              
            </Button>
            
          </Form>
          <br></br>
          <Card>
            <Card.Body>
              <Card.Title>Reseñas</Card.Title>
              <Card.Text>
                {comentarios.map((comentario, index) => (
                  <p key={index}>{comentario}</p>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Section>
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

export default Page8;
