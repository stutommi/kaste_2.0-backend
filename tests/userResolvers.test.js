// THIS TEST ALWAYS NEEDS TO BE RUN WITH SERVER IN NODE TEST ENVIROMENT!

// Libraries
const mongoose = require('mongoose')
const axios = require('axios')
// Models
const User = require('../models/user')
// Utils
const config = require('../utils/config')
const {setupUser, clearDB} = require('./testHelper')

beforeEach( async () => {
  try {
    await mongoose.connect(config.mongoUrl, 
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
    await setupUser()
  } catch (error) {
    console.log(error)
  }
})

describe('user resolvers', () => {

  test('createUser', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
      mutation {
        createUser(username: "testUsername1", name: "testName1", password: "testPassword1") {
          username
          messages {
            id
            content
            created
          }
          sensorEndpoint
          name
        }
      }
      `
    })

    const { data } = response
    expect(data).toMatchObject({
      data: {
        createUser: {
          username: 'testUsername1',
          messages: [],
          sensorEndpoint: '',
          name: 'testName1'
        }
      }
    })

  })

  // Testing many resolvers in one to avoid having to login with other tests
  test('login, me and editSensorEndpoint', async () => {
    const loginResponse = await axios.post('http://localhost:4000/graphql', {
      query: `
      mutation {
        login(password:"testPassword", username: "testUsername") {
          sensorEndpoint
          username
        }
      }
      `
    })

    // Assert login
    const { data } = loginResponse
    expect(data).toMatchObject({
      data: {
        login: {
          sensorEndpoint: '',
          username: 'testUsername'
        }
      }
    })

    // Get token (=value) for other requests
    const { data: { data: { login : value } } } = await axios.post('http://localhost:4000/graphql', {
      query: `
      mutation {
        login(password:"testPassword", username: "testUsername") {
          value
        }
      }
      `
    })
    
    const editUserSensorEndpointResponse = await axios.post('http://localhost:4000/graphql', {
      query: `
      mutation {
        editUserSensorEndpoint(sensorEndpoint: "testUrl") {
          username
          name
          sensorEndpoint
        }
      }
      `
    },
    {
      headers: {
        authorization: `bearer ${value.value}`
      },
    })

    // Assert editUserSensorEndpoint
    expect(editUserSensorEndpointResponse.data).toMatchObject({
      data: {
        editUserSensorEndpoint: {
          sensorEndpoint: 'testUrl',
          username: 'testUsername',
          name: 'testName'
        }
      }
    })

    const meResponse = await axios.post('http://localhost:4000/graphql', {
      query: `
      query {
        me {
          username
          name
          sensorEndpoint
        }
      }
      `
    },
    {
      headers: {
        authorization: `bearer ${value.value}`
      },
    })

    // Assert me
    expect(meResponse.data).toMatchObject({
      data: {
        me: {
          sensorEndpoint: 'testUrl',
          username: 'testUsername',
          name: 'testName'
        }
      }
    })

  })
})

afterAll( async () => {
  await clearDB()
  mongoose.connection.close()
})

