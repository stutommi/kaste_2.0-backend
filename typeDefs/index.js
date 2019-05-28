const { query } = require('./query')
const { mutation } = require('./mutation')
const { userType, messageType, tokenType } = require('./types')

const typeDefs = [query, mutation, userType, messageType, tokenType]

module.exports = {
  typeDefs
}