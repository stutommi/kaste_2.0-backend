const { gql } = require('apollo-server')



const chartDataType = gql`

scalar Date

type ChartData {
  time: [Date!]!
  temperature_C: [Float!]!
  ec_mS_cm: [Float]
  light_lux: [Int]
  CO2_ppm: [Int]
  soil_moisture: [Int]
  humidity: [Int]
}
`

module.exports = { chartDataType }