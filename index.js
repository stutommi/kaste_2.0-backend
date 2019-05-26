// Libraries
const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

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

    // if (authorization && authorization.startsWith('bearer ')) {
    //   const decodedToken = jwt.verify(authorization.substring(7), config.SECRET)

    //   const currentUser = await User.findById(decodedToken.id)

    //   return { currentUser }
    // }
    const currentUser = await User.findOne({ name: 'Tommi Tampio' })
      .populate('messages', { content: 1, created: 1, id: 1 })
    return { currentUser }
  }
})

server.listen().then(({ url }) =>
  console.log(`🚀 Server ready at ${url}`)
)