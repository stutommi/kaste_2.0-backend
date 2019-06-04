const { userResolvers } = require('./userResolvers')
const { messageResolvers } = require('./messageResolvers')
const { chartDataResolvers } = require('./chartDataResolvers')

const resolvers = [userResolvers, messageResolvers, chartDataResolvers]

module.exports = {
  resolvers
}