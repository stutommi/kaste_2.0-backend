const User = require('../models/user')
const bcrypt = require('bcrypt')
const { UserInputError } = require('apollo-server')

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
  },
  Mutation: {
    createUser: async (root, args) => {
      console.log(args)

      const saltRounds = 10

      const passwordHash = await bcrypt.hash(args.password, saltRounds)

      const newUser = new User({
        username: args.username,
        name: args.name,
        passwordHash
      })

      try {
        return newUser.save()
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }
    }
  }
}

module.exports = {
  userResolvers
}