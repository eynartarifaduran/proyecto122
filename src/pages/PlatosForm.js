
import React, { useState } from 'react';

const PlatosForm = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [ingredientes, setIngredientes] = useState(['']);
  const [dificultad, setDificultad] = useState('Fácil');
  const [tiempoPreparacion, setTiempoPreparacion] = useState('');
  const [porciones, setPorciones] = useState('');
  const [calorias, setCalorias] = useState('');
  const [pasoAPaso, setPasoAPaso] = useState(['']);

  const handleAddIngrediente = () => {
    setIngredientes([...ingredientes, '']);
  };

  const handleRemoveIngrediente = (index) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes.splice(index, 1);
    setIngredientes(nuevosIngredientes);
  };

  const handleIngredienteChange = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index] = value;
    setIngredientes(nuevosIngredientes);
  };

  const handleAddPaso = () => {
    setPasoAPaso([...pasoAPaso, '']);
  };

  const handleRemovePaso = (index) => {
    const nuevosPasos = [...pasoAPaso];
    nuevosPasos.splice(index, 1);
    setPasoAPaso(nuevosPasos);
  };

  const handlePasoChange = (index, value) => {
    const nuevosPasos = [...pasoAPaso];
    nuevosPasos[index] = value;
    setPasoAPaso(nuevosPasos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', {
      nombre,
      descripcion,
      categoria,
      imagen,
      ingredientes,
      dificultad,
      tiempoPreparacion,
      porciones,
      calorias,
      pasoAPaso,
    });
  };

  return (
    <form 
    onSubmit={handleSubmit}
      style={{
        background: 'linear-gradient(to bottom, #ff0000, #ffff00, #008000)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
    
      <label>
        Nombre del plato:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        <br></br>
        Descripción:
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      </label>
      <label>
      <br></br>
        Categoría:
        <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      </label>
      <label>
      <br></br>
        Imagen URL:
        <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} />
      </label>

      <label>
      <br></br>
        Ingredientes:
        {ingredientes.map((ingrediente, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={ingrediente}
              onChange={(e) => handleIngredienteChange(index, e.target.value)}
            />
            <button type="button" onClick={() => handleRemoveIngrediente(index)}>
              Eliminar Ingrediente
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddIngrediente}>
          Añadir Ingrediente
        </button>
      </label>

      <label>
      <br></br>
        Dificultad:
        <select value={dificultad} onChange={(e) => setDificultad(e.target.value)}>
          <option value="Fácil">Fácil</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Difícil">Difícil</option>
        </select>
      </label>

      <label>
      <br></br>
        Tiempo de preparación:
        <input
          type="text"
          value={tiempoPreparacion}
          onChange={(e) => setTiempoPreparacion(e.target.value)}
        />
      </label>

      <label>
      <br></br>
        Porciones:
        <input
          type="text"
          value={porciones}
          onChange={(e) => setPorciones(e.target.value)}
        />
      </label>

      <label>
      <br></br>
        Calorías:
        <input
          type="text"
          value={calorias}
          onChange={(e) => setCalorias(e.target.value)}
        />
      </label>

      <label>
      <br></br>
        Pasos a seguir:
        {pasoAPaso.map((paso, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <textarea
              value={paso}
              onChange={(e) => handlePasoChange(index, e.target.value)}
            />
            <button type="button" onClick={() => handleRemovePaso(index)}>
              Eliminar Paso
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddPaso}>
          Añadir Paso
        </button>
      </label>
      <br></br>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default PlatosForm;
