const { gql } = require('apollo-server')

const sensorDataType = gql`
type SensorData {
  value: String!
}
`

module.exports = { sensorDataType }