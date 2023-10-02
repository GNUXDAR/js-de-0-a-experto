# vue-persistency
Persistencia de datos con pinia, persistedstate, localstarage y watch

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

./src/store  
useStore.ts  

## Use persistedstate

[pinia-plugin-persistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate)

* npm i pinia-plugin-persistedstate
  
  main.ts  

```
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(router).use(pinia).mount('#app')
```

en el store, agregar...
```
...
    actions: {
        increment(val = 1) {
            this.count += 1
        }
    },
    persist: true,
...
```

## Use localStorage

/store
```
...
    actions: {
        // uso de localStorage 
        init() {
            const initCount = localStorage.getItem('count')
            if(initCount) {
                this.count = parseInt(initCount)
            }
        },
        // fin de function init() para uso de localStorage 
        increment(val = 1) {
            this.count += 1
            // uso de localStorage (nombre, valor)
            localStorage.setItem('count', this.count.toString())
        }
    },
...
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
