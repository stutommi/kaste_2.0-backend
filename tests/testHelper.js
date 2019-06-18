// Libraries
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// Models
const User = require('../models/user')
const Message = require('../models/message')
const sensorDataByDay = require('../models/sensorDataByDay')

const testUser = {
  username: 'testUsername',
  name: 'testName',
  password: 'testPassword'
}


const setupDB = async () => {

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

module.exports = {setupDB}