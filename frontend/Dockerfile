# Etapa 1: Construção da imagem
FROM node:16-alpine as build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código-fonte do frontend
COPY . .

# Faz o build da aplicação
RUN npm run build

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copia o build do frontend para o diretório de distribuição do nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expondo a porta do servidor
EXPOSE 80

# Comando para rodar o nginx
CMD ["nginx", "-g", "daemon off;"]
