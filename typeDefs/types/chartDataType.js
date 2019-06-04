const { gql } = require('apollo-server')

const chartDataType = gql`
type ChartData {
  time: [String!]!
  temperatureC: [Int!]!
  nutrient: [Int]
  light: [Int]
  soilMoisture: [Int]
  humidity: [Int]
}
`

module.exports = { chartDataType }