const { query } = require('./query')
const { mutation } = require('./mutation')
const { userType, messageType } = require('./types')

const typeDefs = [query, mutation, userType, messageType]

module.exports = {
  typeDefs
}