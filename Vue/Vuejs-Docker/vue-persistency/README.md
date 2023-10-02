# vue-persistency
Persistencia de datos

## persistencia con pinia
```
npm install pinia
```

## configuracion de pinia
main.ts
```
...
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia).mount('#app')

```

./store
useStore.ts
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
