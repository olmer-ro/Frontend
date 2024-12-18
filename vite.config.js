import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite la conexión desde fuera del contenedor (reemplaza localhost con cualquier IP)
    port: 5173,        // Asegúrate de que el puerto sea 5173 o el que necesites
    strictPort: true   // Esto fuerza a Vite a usar solo el puerto configurado y no otros
  }
})
