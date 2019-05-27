// Libraries
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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

    },
    login: async (root, args) => {
      try {
        const user = await User.findOne({ username: args.username })

        const passwordCorrect = !user || !args.password
          ? false
          : await bcrypt.compare(args.password, user.passwordHash)

        if (!passwordCorrect) {
          console.error('invalid username or password')
          return new UserInputError('invalid username or password', {invalidArgs : args})
        } else {

          const userForToken = {
            username: args.username,
            id: user._id
          }

          return {
            value: jwt.sign(userForToken, process.env.SECRET),
            username: user.username
          }
        }
      } catch (error) {
        logger.error(error)
      }
    }
  }
}

module.exports = {
  userResolvers
}