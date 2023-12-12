import React from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { Table, ProgressBar } from 'react-bootstrap';

const Page3 = () => {
  return (
    <div>
      <Header />

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Section style={{ flex: 1, marginRight: '20px' }}>
    
          <h2>Historias Gastronómicas</h2>
          <p>Historia Del Pique macho</p>
          <a href="https://fb.watch/oSODK8n0FS/" target="_blank" rel="noopener noreferrer">
            Ver
          </a>
        </Section>

        <Section style={{ flex: 1 }}>
    
          <h2>Valores Nutricionales</h2>
          <p>Información detallada sobre los valores nutricionales de algunos platos típicos bolivianos.</p>

   
          <h3>Tabla de Valores Nutricionales (1 plato)</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Plato</th>
                <th>Calorías</th>
                <th>Proteínas</th>
                <th>Grasas</th>
                <th>Carbohidratos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sajta</td>
                <td>300</td>
                <td>15g</td>
                <td>10g</td>
                <td>30g</td>
              </tr>
            
            </tbody>
            <tbody>
              <tr>
                <td>Silpancho</td>
                <td>259g</td>
                <td>18g</td>
                <td>9g</td>
                <td>32g</td>
              </tr>
     
            </tbody>
            <tbody>
              <tr>
                <td>Majadito</td>
                <td>305g</td>
                <td>16g</td>
                <td>2g</td>
                <td>60g</td>
              </tr>
         
            </tbody>
            <tbody>
              <tr>
                <td>Plato Paceño</td>
                <td>130g</td>
                <td>5g</td>
                <td>3g</td>
                <td>22g</td>
              </tr>
    
            </tbody>
            <tbody>
              <tr>
                <td>Pique macho</td>
                <td>400g</td>
                <td>3g</td>
                <td>5g</td>
                <td>20g</td>
              </tr>
        
            </tbody>
          </Table>

          <h3>Gráfico de Calorías</h3>
          <ProgressBar now={70} label={`70%`} />
      
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

export default Page3;
