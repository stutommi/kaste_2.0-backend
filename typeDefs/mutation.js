const { gql } = require('apollo-server')

const mutation = gql`
  type Mutation {
    createUser(
      username: String!
      name: String!
      password: String!
      sensorEndpoint: String
    ): User!
    editUserSensorEndpoint(
      sensorEndpoint: String!
    ): User!
    createMessage(
      content: String!
    ): Message!
    login(
      password: String!
      username: String!
    ): Token
    ${
  // Include DB resetting for test enviroment
  process.env.NODE_ENV === 'test'
    ? 'resetDB: Void'
    : ''
}
  }
`



module.exports = {
  mutation
}