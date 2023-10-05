import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// conexion para multiples clientes apollo
// import { ApolloClients } from '@vue/apollo-composable'


const httpLink = createHttpLink({
    uri: 'http://172.17.0.2:4000/graphql'
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
})

createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
}).mount('#app')
