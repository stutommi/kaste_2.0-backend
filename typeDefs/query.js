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
    me: User
    messages: [Message!]!
    sensorData(sensorEndpoint: String!): SensorData! 
  }
`

module.exports = {
  query
}