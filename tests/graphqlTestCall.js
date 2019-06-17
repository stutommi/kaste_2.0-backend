// Resolver tests taken from Ben Awads implementation:
// https://github.com/benawad/graphql-typescript-stripe-example/tree/testing-resolvers

const { graphql } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')

const { typeDefs } = require('../typeDefs')
const { resolvers } = require('../resolvers')

const schema = makeExecutableSchema({ typeDefs, resolvers })

const graphqlTestCall = async (query, variables) => {

  const response = await graphql(
    schema,
    query,
    {},
    {},
    variables
  )
  console.log(response)
  
  return response
}

module.exports = {graphqlTestCall}