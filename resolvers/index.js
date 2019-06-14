const { userResolvers } = require('./userResolvers')
const { messageResolvers } = require('./messageResolvers')
const { chartDataResolvers } = require('./chartDataResolvers')
const { dateResolver } = require('./dateResolver')
const { testSetupResolvers } = require('./testSetupResolvers')
const { sensorDataResolvers } = require('./sensorDataResolvers')

const resolvers = [
  userResolvers,
  messageResolvers,
  chartDataResolvers,
  dateResolver,
  sensorDataResolvers
]

// Include DB resetting resolver for test enviroment
if (process.env.NODE_ENV === 'test') {
  resolvers.push(testSetupResolvers)
}

module.exports = {
  resolvers
}