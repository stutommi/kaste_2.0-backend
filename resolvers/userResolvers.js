// Libraries
const bcrypt = require('bcrypt')
const { UserInputError } = require('apollo-server')
// Models
const User = require('../models/user')
// Utils
const logger = require('../utils/logger')

const userResolvers = {
  Query: {
    me: (root, args, { currentUser }) => currentUser
  },
  Mutation: {
    createUser: async (root, args) => {

      const saltRounds = 10

      const passwordHash = await bcrypt.hash(args.password, saltRounds)

      const newUser = new User({
        username: args.username,
        name: args.name,
        passwordHash
      })

      try {
        await newUser.save()
        return User.findOne({ username: args.username })
          .populate('messages', { content: 1, _id: 1 })
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

    }
  }
}

module.exports = {
  userResolvers
}