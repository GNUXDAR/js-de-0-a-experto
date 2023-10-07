import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServer } from '@apollo/server'
import { useServer } from 'graphql-ws/lib/use/ws'
import { createServer } from 'http'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { expressMiddleware } from '@apollo/server/express4'
import { WebSocketServer } from 'ws'
import express from 'express'
import bodyParser from 'body-parser'
import { PubSub } from 'graphql-subscriptions'
import cors from 'cors'

const comments = [
  {
    name: "User 1",
    text: "Hello world"
  },
  {
    name: "User 1",
    text: "I love graphQl"
  },
  {
    name: "User 2",
    text: "I want to learn apollo"
  },
  {
    name: "User 3",
    text: "Testing features right now. It looks good."
  }
]

const port = 4000

const typeDefs = `
  type Comment {
    name: String!
    text: String!
  }
  type Query {
    getAllComments:[Comment]
    getCommentsFromUser(name:String!):[Comment]
  }
  type Mutation {
    createComment(name: String!, text: String!): String!
  }
  type Subscription {
    commentCreated: Comment!
  }

`

const pubSub = new PubSub()

const resolvers = {
  Query: {
    getAllComments: () => comments,
    getCommentsFromUser: (_, {name}) =>  comments.filter((item) => item.name === name)
  },
  Subscription: {
    commentCreated: {
      subscribe: () => pubSub.asyncIterator(['COMMENT_CREATED'])
    }
  },
  Mutation: {
     createComment(_, {name, text}) {
     comments.push({
      name: name,
      text: text
     })
      pubSub.publish('COMMENT_CREATED', { commentCreated: {
        name, text: text
      }})

      return `Comment: ${text} created.`
    }
  }
}


const schema = makeExecutableSchema({typeDefs, resolvers})
const app = express()
const httpServer = createServer(app)
const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql'
})
const wsServerCleanup = useServer({schema}, wsServer)

const apolloServer = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({httpServer}),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await wsServerCleanup.dispose()
          }
        }
      }
    }
  ]
})

await apolloServer.start()
app.use('/graphql', cors<cors.CorsRequest>({ origin: ['http://172.17.0.2:8080', 'https://studio.apollographql.com'] }), bodyParser.json(), expressMiddleware(apolloServer))
// app.use('/graphql', cors<cors.CorsRequest>({ origin: ['http://localhost:8080', 'https://studio.apollographql.com'] }), bodyParser.json(), expressMiddleware(apolloServer))


httpServer.listen(port, () => {
  console.log(`Server ready at http://172.17.0.3:${port}/graphql`)
})