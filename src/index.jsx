// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Importa el método createRoot para montar la app en el DOM
import './index.css';  // Los estilos globales
import App from './App';  // El componente principal de la aplicación

// Crear el contenedor raíz en el DOM y renderizar la aplicación dentro de él.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);