const { query } = require('./query')
const { mutation } = require('./mutation')
const { subscription } = require('./subscription')
const { userType, messageType, tokenType, chartDataType } = require('./types')

const typeDefs = [query, mutation, subscription, userType, messageType, tokenType, chartDataType]

module.exports = {
  typeDefs
}