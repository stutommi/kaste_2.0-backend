
const { gql } = require('apollo-server')

const userType = gql`
  type User {
    id: ID!
    username: String!
    messages: [Message!]!
    passwordHash: String!
    sensorEndpoint: String
    name: String!
  }
`

module.exports = {
  userType
}