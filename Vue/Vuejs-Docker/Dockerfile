# Dockerfile para trabajar con Vue.js
FROM node:14
LABEL description="Es una imagen para trabajar con Vue.js desde cero"

# Instalar http-server globalmente
RUN npm install -g http-server

# Crear el directorio de trabajo y establecerlo
WORKDIR /app

# Instalar las herramientas necesarias
RUN npm install -g npm@latest
RUN npm install -g @vue/cli

EXPOSE 8080

CMD ["/bin/bash"]