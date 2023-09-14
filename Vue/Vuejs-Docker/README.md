# Para crear un proyecto desde Cero con Vue.js

## Proyectos
[components, vue-router, sevices, etc](https://github.com/GNUXDAR/js-de-0-a-experto/tree/master/Vue/Vuejs-Docker/vue-services)  

[Autenticacion: firebase, social login](./vue-auth/)

## Creamos un Dockerfile

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

## Creamos un docker-compose.yml

    version: '3'

    services:
    vuejs:
        container_name: vuejs
        build:
        context: .
        dockerfile: Dockerfile
        ports:
        - "8080:8080"
        working_dir: /app 
        volumes:
        - ./:/app

## Corremos los siguientes comandos

    $ docker build -t vuejs .
    $ docker compose up -d
    $ docker run -it --rm -v $(pwd):/app vuejs

## Coamndos dentro del contenedor

    $ vue create basic-vue
    $ cd basic-vue/
    $ npm run serve

      App running at:
        - Local:   http://localhost:8080/ 
        - Network: http://172.17.0.2:8080/

## vuejs
Este es el nombre de la imagen que le he dado en este caso

## basic-vue
Este es el nombre del proyecto vue

# Instalar Pre Procesadores CSS (sass)
    npm install -D sass-loader sass  
    ó  
    npm install -D less-loader less  

# Instalar Framework css (bootstrap)

        npm install --save bootstrap  