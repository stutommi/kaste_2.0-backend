const { gql } = require('apollo-server')



const chartDataType = gql`

scalar Date

type ChartData {
  time: [Date!]!
  temperatureC: [Float!]!
  nutrient: [Int]
  light: [Int]
  soilMoisture: [Int]
  humidity: [Int]
}
`

module.exports = { chartDataType }