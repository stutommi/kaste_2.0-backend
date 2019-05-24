const { userResolvers } = require('./userResolvers');
const { messageResolvers } = require('./messageResolvers');

const resolvers = [userResolvers, messageResolvers]

module.exports = {
  resolvers
}