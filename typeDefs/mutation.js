const { gql } = require('apollo-server')

const mutation = gql`
  type Mutation {
    createUser(
      username: String!
      name: String!
      password: String!
    ): User!
    createMessage(
      content: String!
    ): Message!
  }
`

module.exports = {
  mutation
}