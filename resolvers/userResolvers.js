// A map of functions which return data for the schema.
const userResolvers = {
  Query: {
    me: () => {
      return {
        username: 'käyttäjätunnus',
        passwordHash: 'salashankku',
        Messages: [
          {
            created: Date.now,
            user: 'käyttäjätunnus',
            content: 'ihana homma'
          }
        ]
      }
    }
  }
}

module.exports = {
  userResolvers
}