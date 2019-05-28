const { gql } = require('apollo-server')

const subscription = gql`
  type Subscription {
    messageAdded: Message!
  }
`

module.exports = {
  subscription
}