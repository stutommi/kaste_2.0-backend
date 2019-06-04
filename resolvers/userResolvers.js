// Libraries
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')
// Models
const User = require('../models/user')
// Utils
const logger = require('../utils/logger')
const intervalIdObject = require('../sensorEndpoints')
const { connectSensorUrlIfNew, disconnectIfNoUsers } = require('../utils/sensorFuncs')

const userResolvers = {
  Query: {
    me: (root, args, { currentUser }) => {
      return currentUser
    }
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
          return new UserInputError('invalid username or password', { invalidArgs: args })
        } else {

          const userForToken = {
            username: args.username,
            id: user._id
          }

          return {
            value: jwt.sign(userForToken, process.env.SECRET),
            username: user.username,
            sensorEndpoint: user.sensorEndpoint
          }
        }
      } catch (error) {
        logger.error(error)
      }
    },
    editUserSensorEndpoint: async (root, args, { currentUser }) => {

      const updatedUser = await User.findByIdAndUpdate(currentUser.id, { $set: { sensorEndpoint: args.sensorEndpoint } }, { new: true })
      
      const prevEndpoint = currentUser.sensorEndpoint
      
      // Start Fetching from new endpoint if it doesn't have any current users connected
      if (args.sensorEndpoint !== '') {
        connectSensorUrlIfNew(args.sensorEndpoint, intervalIdObject.get())
      }
      
      // Stop Fetching from endpoint if it doesn't have any current users connected
      if (prevEndpoint !== '') {
        disconnectIfNoUsers(prevEndpoint, intervalIdObject.get())
      }
      
      return updatedUser
    }
  }
}

module.exports = {
  userResolvers
}