import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Dropdown } from 'react-bootstrap';
import '../App.css';
import backgroundImg from '../img/jurados.jpg'; 

const Home = () => {
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
          
          <h2 style={{ color: '#ffffff' }}>ENTREVISTAS</h2>
          <p>
            <a href="https://www.youtube.com/watch?v=BhWUgEu1aRI&pp=ygUcZW50cmV2aXN0YXMgY2hlZnMgYm9saXZpYW5vcw%3D%3D" target="_blank" rel="noopener noreferrer">
              ENTREVISTA A SOFIA 
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=uMmTTey9dd0&pp=ygUcZW50cmV2aXN0YXMgY2hlZnMgYm9saXZpYW5vcw%3D%3D" target="_blank" rel="noopener noreferrer">
              ENTREVISTA A MARCOS GONZALES
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=-IddfzYjgzE&pp=ygUcZW50cmV2aXN0YXMgY2hlZnMgYm9saXZpYW5vcw%3D%3D" target="_blank" rel="noopener noreferrer">
              ENTREVISTA A LAURA LEON
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=w5GdMsvwwsE&pp=ygUcZW50cmV2aXN0YXMgY2hlZnMgYm9saXZpYW5vcw%3D%3D" target="_blank" rel="noopener noreferrer">
              ENTREVISTA A CHEF CORAL
            </a>
          </p>
        </Section>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <h2  style={{ color: '#ffffff' }}>MENU DE LOS PLATOS</h2>
        
          <Dropdown align="end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              
              PLATOS DE 15BS
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">Silpancho</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">sajta</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown align="end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              PLATOS DE 25BS
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">Fricase mixto</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">Chicharron</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">LECHON</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">Pollo al horno</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown align="end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              PLATOS DE 40BS
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">Charque Completo</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">TRANCAPECHO</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown align="end">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              EXTRAS 5-15BS
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">PAPAS FRITAS</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">ARROZ</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">COCA COLA POPULAR</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">CERVEZA PACEÑA</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">AQUARIUS</Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/profile.php?id=100063724774579">SEVEN UP</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <br></br>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
            <div>
              <img src="https://lh3.googleusercontent.com/p/AF1QipM0QKtmE8ja432lX8C8j_y4-nt-k3qpx7BYdoI5=s680-w680-h510" alt="Descripción de la imagen 1" style={{ width: '100%', height: 'auto' }} />
              <p>Puerta Principal</p>
            </div>

            
          </div>

        <Section style={{ flex: 1 }}>
        
          <h2 style={{ color: '#ffffff' }}>Conéctate en Facebook</h2>
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

export default Home;
