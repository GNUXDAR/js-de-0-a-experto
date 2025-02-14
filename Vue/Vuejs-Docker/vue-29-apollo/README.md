# vue-29apollo
stand by: 24:17

Conectarse a un servicio de graphql con el cliente de [Apollo](https://github.com/GNUXDAR/js-de-0-a-experto/blob/master/Vue/Vuejs-Docker/graph-apollo-for-vue-class)

[APOLLO](https://v4.apollo.vuejs.org/guide/)
## Install packages
```
npm i --save graphql graphql-tag @apollo/client
```
## Config main.ts
```
...
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const httpLink = createHttpLink({
    uri: 'http://172.17.0.2:4000/graphql'
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
})

const app = createApp(App)
app.mount('#app')
```
## Install apollo-composable
para uso de composition API
```
npm i --save @vue/apollo-composable
```

main.ts
```
...
import { DefaultApolloClient } from '@/vue/apollo-composable'

```

## Install apollo-option
para uso de Option API
```
npm i --save @vue/apollo-option
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
