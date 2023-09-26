# note-project
En este proyecto lo que haremos sera consumir la API del proyecto de laravel [Laravel API](../vue-example-server/) 

## Install Pinia
```
npm install pinia
```

## Config Pinia
```
...
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia).mount('#app')
```

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
