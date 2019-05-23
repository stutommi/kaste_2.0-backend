const { query } = require('./query')
const { userType, messageType } = require('./types')

const typeDefs = [query, userType, messageType]

module.exports = {
  typeDefs
}