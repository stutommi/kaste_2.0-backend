
const { gql } = require('apollo-server')

const userType = gql`
  type User {
    id: ID!
    username: String!
    Messages: [Message!]!
    passwordHash: String!
    name: String!
  }
`

module.exports = {
  userType
}