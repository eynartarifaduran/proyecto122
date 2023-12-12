
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <header style={{ backgroundColor: '#2c3e50', padding: '10px' }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
          <li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/')}>
              Menu Principal
            </button>
          </li>
          <li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page1')}>
               Platos De Todos Los Departamentos
            </button>
          </li>
          <li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page2')}>
              Envia Tu Receta
            </button>
          </li>
          <li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page3')}>
              Valores Nutricionales
            </button>
          </li>
          <li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page4')}>
             Guias
            </button>
          </li><li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page5')}>
              Preparacion
            </button>
          </li><li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page6')}>
              Listas
            </button>
          
          </li><li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page8')}>
              Comentarios
            </button>
          </li><li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page9')}>
              Galeria
            </button>
          </li><li style={{ margin: '0 10px' }}>
            <button style={{ backgroundColor: '#34495E', color: 'white' }} onClick={() => navigateTo('/page10')}>
              Credits
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
