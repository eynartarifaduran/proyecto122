
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2c3e50', padding: '20px', color: 'white' }}>
      <div>
        <h3>Doña Remedios</h3>
        <p>Dirección: Montevideo, Av. Arce #2081, La Paz, Bolivia</p>
        <p>Horario: Lunes a Domingo, 9:00 AM - 9:00 PM</p>
      </div>

      <div>
        <h3>Recetas Populares</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=VydD2si0MwI&pp=ygUfY29tbyBoYWNlciBzYWx0ZcOxYXMgYm9saXZpYW5hcw%3D%3D">Salteñas</a></li>
          <li><a href="https://www.youtube.com/watch?v=RyyWzN1aet8&pp=ygUWc2lscGFuY2hvIGNvY2hhYmFtYmlubw%3D%3D">Silpancho</a></li>
          <li><a href="https://www.youtube.com/watch?v=asLAk_bdXkM&pp=ygUMc29wYSBkZSBtYW5p">Sopa de Maní</a></li>
        </ul>
      </div>

      <div>
        <h3>Conéctate con Nosotros</h3>
        <p>Síguenos en nuestras redes sociales para conocer las últimas novedades.</p>
        <p>Email: info@restaurante-boliviano.com</p>
      </div>

    </footer>
  );
};

export default Footer;
