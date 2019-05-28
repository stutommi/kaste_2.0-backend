const { gql } = require('apollo-server')

const tokenType = gql`
type Token {
  value: String!
  username: String!
}
`

module.exports = { tokenType }