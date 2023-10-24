# vue-34-deploy
La prueba la he subido a [/vue](https://arturocabrera.com/vue/)
pero se ve el "error" de la imagen en blaco, cuando se inspeccinoa la consola no accede a los ficherosjs y css. Para esto es necesario crear una config en el fichero vue.config.js

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.PUBLIC_HTML || "/"
}
```

anexando la linea 
```
publicPath: process.env.PUBLIC_HTML || "/"
```
donde definimos la variable de entorno, para esto es necesario crear un fichero en el directorio raiz .env con la o las variables definidas  
```
PUBLIC_HTML="/vue"
```

en el caso de hacer un deploy en netlify crear un fichero  
./netlify.toml

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
