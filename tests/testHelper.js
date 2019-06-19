// Libraries
const bcrypt = require('bcrypt')
const axios = require('axios')
// Models
const User = require('../models/user')
const Message = require('../models/message')
const SensorDataByDay = require('../models/sensorDataByDay')

const testUser = {
  username: 'testUsername',
  name: 'testName',
  password: 'testPassword'
}

const testMessages = [
  {
    content: 'Test content 1'
  },
  {
    content: 'Test content 2'
  },
  {
    content: 'Test content 3'
  }
]


const setupUser = async () => {

  const saltRounds = 10

  const passwordHash = await bcrypt.hash(testUser.password, saltRounds)

  const newUser = new User({
    username: testUser.username,
    name: testUser.name,
    passwordHash
  })

  try {
    await User.deleteMany({})
    await newUser.save()
  } catch (error) {
    console.log(error)
  }
}

const login = async () => {
  const { data: { data: { login : value } } } = await axios.post('http://localhost:4000/graphql', {
    query: `
    mutation {
      login(password:"${testUser.password}", username: "${testUser.username}") {
        value
      }
    }
    `
  })

  return value
}

const clearDB = async () => {
  try {
    await User.deleteMany({})
    await Message.deleteMany({})
    await SensorDataByDay.deleteMany({})
  } catch (error) {
    console.error(error)
  }
}

module.exports = {setupUser, login, clearDB}