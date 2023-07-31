# Use a imagem base apropriada para sua aplicação Node.js (por exemplo, node:14)
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para dentro do contêiner
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/

# Defina a porta em que a aplicação estará escutando (a mesma definida em "ports" no docker-compose.yml)
EXPOSE 8000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
