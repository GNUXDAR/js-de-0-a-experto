# vue-31-i18n
Vue [I18n](https://vue-i18n.intlify.dev/)
Internationalization plugin for Vue.js --verion 9
```
npm install vue-i18n@9
```

## Config main.ts
```
...
import { createI18n } from 'vue-i18n'

const i18n =  createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)
app.use(i18n).mount('#app')
```

## Folder lang
./src/lang/messages.ts


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
