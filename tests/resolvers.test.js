// Libraries
const mongoose = require('mongoose')
// Helper funcs
const graphqlTestCall = require('./graphqlTestCall')
// Models
const Message = require('../models/message')
const SensorDataByDay = require('../models/sensorDataByDay')
const User = require('../models/user')


// MUTATIONS AND QUERIES COME HERE

const createMessage = `
mutation createMessage(
  $content: String!
  ) {
  createMessage(
    content: $content
  ) {
    content
    user {
      name
    }
    created
    id
  }
}
`

const editUserSensorEndpoint = `
mutation editUserSensorEndpoint(
  $sensorEndpoint: String!
  ) {
    editUserSensorEndpoint(
    sensorEndpoint: $sensorEndpoint
  ) {
    sensorEndpoint
    name
    username
  }
}
`

const loginUser = `
mutation loginUser(
  $password: String!
  $username: String!
  ) {
  login(
    password: $password
    username: $username
  ) {
    value
    username
    sensorEndpoint
  }
}
`

const chartData = `
  query ChartData($id: Int!, $type: HousePlant!, $range: DayWeekMonthYear!) {
  chartData(id: $id, type: $type, range: $range) {
    time
    light
    nutrient
    soilMoisture
    temperatureC
    humidity
  }
}
`

const currentUser = `
{
  me {
    name
    username
    id
    sensorEndpoint
  }
}
`

// TESTS
describe.only('Resolvers', () => {
  beforeEach(() => {
    Message.remove({})
    SensorDataByDay.remove({})
    User.remove({})
  })

  afterEach(() => {

  })

  it.only('test', async () => {
    expect(0).toBe(0)
  })
})

