const { gql } = require('apollo-server')

const query = gql`
  enum HousePlant {
    HOUSE
    PLANT
  }

  type Query {
    chartData(type: HousePlant, id: Int! ): [ChartData!]!
    me: User
    messages: [Message!]!
  }
`

module.exports = {
  query
}