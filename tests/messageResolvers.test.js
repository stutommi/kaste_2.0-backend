// THIS TEST ALWAYS NEEDS TO BE RUN WITH SERVER IN NODE TEST ENVIROMENT!

// Libraries
const mongoose = require('mongoose')
const axios = require('axios')
// Models

// Utils
const config = require('../utils/config')
const {setupUser, clearDB, login} = require('./testHelper')

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

describe('message resolvers', () => {
  
  test('createMessage, messages', async () => {
    const token = await login()

    const createMessageResponse = await axios.post('http://localhost:4000/graphql', {
      query: `
      mutation {
        createMessage(content: "Test content.") {
          content
          user {
            name
            username
            sensorEndpoint
          }
        }
      }
      `
    },
    {
      headers: {
        authorization: `bearer ${token.value}`
      }
    })

    // Assert createMessage
    const { data } = createMessageResponse
    expect(data).toMatchObject({
      data: {
        createMessage: {
          user: {
            username: 'testUsername',
            name: 'testName',
            sensorEndpoint: ''
          },
          content: 'Test content.',
        }
      }
    })


    const messagesResponse = await axios.post('http://localhost:4000/graphql', {
      query: `
        query {
          messages {
            content
            created
            user {
              name
            }
          }
        }
        `
    })

    // Assert messages
    expect(messagesResponse.data).toMatchObject({
      data: {
        messages: [{
          user: {
            name: 'testName'
          },
          content: 'Test content.'
        }]
      }
    })

  })
})

afterAll( async () => {
  await clearDB()
  mongoose.connection.close()
})