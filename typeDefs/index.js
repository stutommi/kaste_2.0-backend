const { query } = require('./query')
const { mutation } = require('./mutation')
const { subscription } = require('./subscription')
const { userType, messageType, tokenType } = require('./types')

const typeDefs = [query, mutation, subscription, userType, messageType, tokenType]

module.exports = {
  typeDefs
}