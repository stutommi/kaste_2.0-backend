const { gql } = require('apollo-server')

const tokenType = gql`
type Token {
  value: String!
  username: String!
  sensorEndpoint: String!
}
`

module.exports = { tokenType }