// Libraries
const mongoose = require('mongoose')
// Helper funcs
const { graphqlTestCall } = require('./graphqlTestCall')
// Models
const Message = require('../models/message')
const SensorDataByDay = require('../models/sensorDataByDay')
const User = require('../models/user')

// MUTATIONS AND QUERIES COME HERE

const createUser = `
mutation createUser(
  $name: String!
  $username: String!
  $password: String!
  ) {
  createUser(
    name: $name
    username: $username
    password: $password
  ) {
    id
    username
    name
    messages {
      content
    }
    passwordHash
    sensorEndpoint
  }
}
`

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
// beforeEach(async () => {
//   await Message.remove({})
//   await SensorDataByDay.remove({})
//   await User.remove({})
// })

// afterEach(() => {

// })

// TESTS
describe.only('Resolvers', () => {

  it.only('createUser creates a user', async () => {
    const testUser = {
      name: 'testName',
      username: 'testUsername',
      password: 'testPassword'
    }
    console.log('hea')

    const response = await graphqlTestCall(createUser, {
      name: testUser.name,
      username: testUser.username,
      password: testUser.password
    })
    console.log('hei')

    // expect(response).toEqual({ data: { register: true } })
  })
})

