
import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Card, Row, Col } from 'react-bootstrap';

const Page5 = () => {
  return (
    <div>
      <Header />

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Section style={{ flex: 1 }}>
   
          <h2>Historias Gastronómicas</h2>
          <p>Historia De La Llajwa</p>
          <a
            href="https://www.lostiempos.com/especial-multimedia/20180910/llajwa-idilio-paladar-boliviano#:~:text=Su%20nombre%20proviene%20del%20quechua,la%20vida%2C%20como%20el%20aj%C3%AD."
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver
          </a>
        </Section>

      
        <Section style={{ flex: 2 }}>
          <h2>Recetas Detalladas</h2>
          <p>Descubre cómo preparar platos típicos bolivianos con nuestras recetas detalladas.</p>

   
          <Row>
            <Col md={6}>
              <Card>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Silpancho_cochalo.jpg/640px-Silpancho_cochalo.jpg" />
                <Card.Body>
                  <Card.Title>Silpancho</Card.Title>
                  <Card.Text>
                    <h5>Ingredientes:</h5>
                    <ul>
                      <li>Arroz</li>
                      <li>papas</li>
                      <li>carne de vaca</li>
                      <li>huevo frito</li>
                      <li>ensalada</li>
                    </ul>
                    <h5>Pasos de Preparación:</h5>
                    <ol>
                      <li>Hierve las papas lavadas en una olla con abundante agua y un puñado de sal. No es necesario retirar la piel.</li>
                      <li>Pica finamente los pimientos, la cebolla y los tomates frescos, que formarán parte de la ensalada que acompañará el silpancho cochabambino.</li>
                      <li>Condimenta la carne molida con sal, pimienta y comino al gusto. Mezcla bien y reserva. Recuerda que aunque nosotros estemos haciendo silpancho con carne molida, también se puede hacer con filete.</li>
                      <li>Haz un bola con la carne molida y colócala sobre el pan rallado, que estará en un plato plano.</li>
                      <li>Dale la vuelta la carne y repite el paso anterior. Tiene que quedar como si de un filete se tratara, de medio centímetro de grosor aproximadamente y con las dos caras rebozadas (empanizadas).</li>
                      <li>Retira las papas cuando estén listas y en la misma sartén fríe un huevo. Como la sartén estará ya muy caliente, no tienes que añadir más aceite si no quieres, ya que el huevo se cocinará igualmente con la cantidad que queda.</li>
              
                    </ol>
                    <p>Tiempo de Cocción: 20 minutos</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Img variant="top" src="https://www.cocina-boliviana.com/base/stock/Recipe/485-image/485-image_web.jpg" />
                <Card.Body>
                  <Card.Title>Plato Paceño</Card.Title>
                  <Card.Text>
                    <h5>Ingredientes:</h5>
                    <ul>
                      <li>Choclo</li>
                      <li>papas</li>
                      <li>queso</li>
                      <li>aceite</li>
                     
                  
                    </ul>
                    <h5>Pasos de Preparación:</h5>
                    <ol>
                      <li>Cocinar las Mazorcas: En una olla grande, hervir agua con 1 cucharada y media de azúcar y 1 cucharadita y media de anís. Añadir las mazorcas de maíz y cocinar a fuego alto durante 25 a 30 minutos.</li>
                      <li>Cocinar las Papas: En otra olla, cocer las papas en agua con sal al gusto, hasta que estén blandas.</li>
                      <li>Preparar el Queso: Cortar el queso en rodajas finas. Hornearlas hasta que estén doradas y crujientes, o freírlas en aceite caliente hasta obtener un color dorado.</li>
                      <li>Servir: En cada plato, colocar una mazorca de maíz, una rodaja de queso frito, una papa y, opcionalmente, una cucharada de llajwa (salsa picante tradicional).</li>
                      <li>Opción con Carne: Si se desea, agregar un bistec de res a cada plato. La carne deberá ser preparada previamente al gusto.</li>
          
                    </ol>
                    <p>Tiempo de Cocción: 35 minutos</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
       
        </Section>

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

export default Page5;
