# Etapa 1: Construção da imagem
FROM node:16-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta em que o backend irá rodar
EXPOSE 5000

# Define o comando para rodar o servidor
CMD ["npm", "start"]
