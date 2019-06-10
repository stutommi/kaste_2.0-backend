const { gql } = require('apollo-server')



const chartDataType = gql`

scalar Date

type ChartData {
  time: [Date!]!
  temperatureC: [Float!]!
  nutrient: [Float]
  light: [Float]
  soilMoisture: [Int]
  humidity: [Int]
}
`

module.exports = { chartDataType }