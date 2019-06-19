// For Cypress tests

// Models
const User = require('../models/user')
const Message = require('../models/message')
const sensorDataByDay = require('../models/sensorDataByDay')

const testSetupResolvers = {
  Mutation: {
    resetDB: async () => {

      await User.deleteMany({})
      await Message.deleteMany({})
      await sensorDataByDay.deleteMany({})

      return {message: 'Test database cleared'}
    }
  }
}

module.exports = { testSetupResolvers }