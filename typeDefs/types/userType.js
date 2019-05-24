
const { gql } = require('apollo-server')

const userType = gql`
  type User {
    id: ID!
    username: String!
    messages: [Message!]!
    passwordHash: String!
    name: String!
  }
`

module.exports = {
  userType
}