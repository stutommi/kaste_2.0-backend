const { gql } = require('apollo-server')

const messageType = gql`
  type Message {
    id: ID!
    user: User!
    content: String!
    created: String!
  }
`

module.exports = {
  messageType
}