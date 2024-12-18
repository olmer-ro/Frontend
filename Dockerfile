# Usa una imagen base de Node.js
FROM node:20

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto de desarrollo
EXPOSE 5173

# Ejecuta el servidor de desarrollo de Vite
CMD ["npm", "run", "dev"]
