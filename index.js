// Libraries
const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const jep = process.env.SECRET
console.log(process.env.MONGO_URI)
// Utils
const config = require('./utils/config')
const logger = require('./utils/logger')

// GQLtypeDefs and resolvers
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
  .then(() => logger.info('connected to database'))
  .catch(error => logger.error('error connecting to database', error.message))

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) =>
  console.log(`🚀 Server ready at ${url}`)
)