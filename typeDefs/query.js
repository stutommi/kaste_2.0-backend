const { gql } = require('apollo-server')

const query = gql`
  enum HousePlant {
    HOUSE
    PLANT
  }

  enum DayWeekMonthYear {
    DAY
    WEEK
    MONTH
    YEAR
  }

  type Query {
    chartData( id: Int!, type: HousePlant!, range: DayWeekMonthYear!): ChartData!
    sensorData(sensorEndpoint: String!): SensorData!
    me: User
    messages: [Message!]!
  }
`

module.exports = {
  query
}