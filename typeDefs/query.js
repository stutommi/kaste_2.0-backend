const { gql } = require('apollo-server')

const query = gql`
  type Query {
    me: User
    messages: [Message!]!
  }
`

module.exports = {
  query
}