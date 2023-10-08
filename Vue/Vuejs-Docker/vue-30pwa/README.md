# vue-30pwa
PWA, o Progressive Web App, es una tecnología que combina lo mejor de las aplicaciones web y las aplicaciones nativas. Las PWAs se desarrollan utilizando tecnologías web estándar como HTML, CSS y JavaScript, pero ofrecen una experiencia de usuario similar a la de las aplicaciones nativas. 

```
npm run build
```

```
npm install http-server -g
```

levantar el proyecto por http
```
http-server dist/
```

para servir una pwa es necesario y obligatorio el uso del protocolo https, para poder hacer las pruebas es necesario un servicio que nos ayude con este proposito.

[ngrok](https://ngrok.com/download)

## con Docker
Para instalar `ngrok` dentro de un contenedor que está ejecutando una aplicación Vue.js, sigue estos pasos:

1. **Ingresa al Contenedor:**
   Primero, accede al shell del contenedor en el que está ejecutándose la aplicación Vue.js. Puedes hacerlo usando el comando `docker exec`:

   ```bash
   docker exec -it NOMBRE_DEL_CONTENEDOR /bin/bash
   ```
    ó com en mi caso...
   ```bash
   docker run -it --rm -v $(pwd):/app vuejs
   ```

   Sustituye `NOMBRE_DEL_CONTENEDOR` por el nombre real de tu contenedor.

2. **Descarga y Configura Ngrok:**
   Una vez dentro del contenedor, descarga `ngrok` desde el sitio web oficial o usando `wget`. Por ejemplo, para descargar `ngrok` en un sistema basado en Linux:

   ```bash
   wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
   ```

   Luego, descomprime el archivo ZIP:

   ```bash
   unzip ngrok-stable-linux-amd64.zip
   ```

3. **Autenticación (Opcional):**
   Si deseas utilizar las funcionalidades premium de `ngrok` o necesitas autenticarte para aumentar el límite de conexiones por minuto, configura tu token de autenticación. Puedes hacerlo ejecutando el siguiente comando dentro del contenedor:

   ```bash
   ./ngrok authtoken TU_TOKEN
   ```

   Reemplaza `TU_TOKEN` con el token proporcionado por ngrok.

4. **Uso de Ngrok:**
   Ahora puedes usar `ngrok` según tus necesidades, por ejemplo, para exponer un servidor local en el puerto 8080, ejecuta:

   ```bash
   ./ngrok http 8080
   ```

   Ngrok generará una URL pública a la que puedes acceder desde fuera del contenedor para interactuar con tu aplicación Vue.js.

Recuerda que estos pasos asumen que tienes permisos para instalar software dentro del contenedor. Dependiendo de la configuración del contenedor y del entorno en el que estés trabajando, es posible que necesites permisos de administrador o realizar ajustes adicionales en la configuración del contenedor para instalar y ejecutar `ngrok`.

### Nota: 
En caso de que te genere algun error, ejecuta el siguiente comando para que se redireccion a la IP del contenedor (verificar la IP del contendor)

    ```
    ./ngrok http 172.17.0.2:8080
    ```

* Registrarse al servicio en el caso de no estarlo.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
