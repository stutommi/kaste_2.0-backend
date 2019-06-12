const { gql } = require('apollo-server')

const voidType = gql`
  type Void {
    message: String
  }
`

module.exports = {
  voidType
}