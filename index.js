// Libraries
const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) =>
  console.log(`🚀 Server ready at ${url}`)
)