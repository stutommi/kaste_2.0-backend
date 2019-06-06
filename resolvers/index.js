const { userResolvers } = require('./userResolvers')
const { messageResolvers } = require('./messageResolvers')
const { chartDataResolvers } = require('./chartDataResolvers')
const { dateResolver } = require('./dateResolver')

const resolvers = [userResolvers, messageResolvers, chartDataResolvers, dateResolver]

module.exports = {
  resolvers
}