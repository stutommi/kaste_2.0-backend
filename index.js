// Libraries
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const http = require('http')
const cors = require('cors')
// Models
const User = require('./models/user')
// Utils
const config = require('./utils/config')
const logger = require('./utils/logger')
// GQLtypeDefs and resolvers
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

mongoose.set('useFindAndModify', false)

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
  .then(() => logger.info('connected to database'))
  .catch(error => logger.error('error connecting to database', error.message))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {

    const authorization = req ? req.headers.authorization : null

    if (authorization && authorization.startsWith('bearer ')) {

      const decodedToken = jwt.verify(authorization.substring(7), config.SECRET)

      const currentUser = await User.findById(decodedToken.id)
        .populate('messages', { content: 1, created: 1, id: 1 })

      return { currentUser }
    }
  }
})

const app = express()
app.use(express.static('build'))
app.use(cors())

server.applyMiddleware({ app })

// Subscriptions
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: config.PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${config.PORT}${server.subscriptionsPath}`)
})