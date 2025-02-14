# Vue 3 + Vite
Usando vite con yarn, [vitest](https://vitest.dev/)

```
yarn create vite vue-project --template vue
cd vue-project
yarn
yarn dev
```

## Instalar vitest
-D para instalar en el entorno de desarrollo (Develooper)
```
yarn add -D vitest
```
### Fichero de configuracion vites
vitest.config.js  en la raiz del proyecto

## Comandos de pruebas
En este caso como no lo hacemos con el CLI de vue, debemos definir manualmente el comando de test en el package.json

```
  "scripts": {
    ...
    "test": "vitest",
    "coverage": "vitest run --coverage"
  },
```

### Docker
to run in docker, add in package.json that "--host":

```
  "scripts": {
    "dev": "vite --host",
    ...
```

## Test
se crea un carpeta "tests"n e n plural y dentro los ficheros de pruebas  

### instalando jest para los test
```
yarn add --dev jest
```

## Instalando el router
para cada modulo o plugi que necesitemos de vue, a diferencia del CLI de vue, aqui debemos instalar cada uno manualmente

```
yarn add vue-router
```

debemos crear la carpeta manualmente ./src/router  y se puede crear un snippet o se puede copiar de una proyecto ya existente

Nota:  
Como veniamos utilizando el @ para referirnos al ./src debemos crearlo en vite para poderlo utilizar.  
en `vite.config.js` 

```
...
import path from 'path'
...
  resolve: {
    '@': path.resolve(__dirname, './src')
  }
```

quedado mas o menos de la siguiebte manera:  
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    '@': path.resolve(__dirname, './src')
  }
})

```

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
