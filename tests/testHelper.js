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

const testSensorData = [
  {
    time: new Date(123324324),
    temperature: 5.25,
    type: 'house',
    location: 'attic',
    humidity: 24
  },
  {
    time: new Date(2423324324),
    temperature: 7.33,
    type: 'house',
    location: 'toilet',
    humidity: 34
  },
  {
    time: new Date(242332342),
    temperature: 2.23,
    type: 'plant',
    location: 'Wisteria Sinensis',
    soil_moisture: 66,
    light: 46,
    nutrient: 22
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

const setupSensorData = async () => {
  const sensorObjects = testSensorData.map(sensor => new SensorDataByDay(sensor))

  const promiseArray = sensorObjects.map(sensor => sensor.save())

  await Promise.all(promiseArray)
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

module.exports = {setupUser, login, clearDB, setupSensorData}