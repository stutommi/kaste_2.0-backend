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
      console.log('____________')

      const updatedUser = await User.findByIdAndUpdate(currentUser.id, { $set: { sensorEndpoint: args.sensorEndpoint } }, { new: true })

      const prevEndpoint = currentUser.sensorEndpoint
      console.log('prevEndpoint', prevEndpoint)

      // Start Fetching from new endpoint if it doesn't have any current users connected
      const usersWithPrevEndpoint = await User.find({ sensorEndpoint: args.sensorEndpoint })
      if (usersWithPrevEndpoint.length === 0) {
        console.log('KESKEN')
        
      }

      // Quit fethching endpoint if it doesn't have any users connected
      if (prevEndpoint) {
        console.log('PREV endpoint was not empty string')
        
        const usersWithPrevEndpoint = await User.find({ sensorEndpoint: prevEndpoint })
        
        console.log('usersWithPrevEndpoint', usersWithPrevEndpoint.length)

        if (usersWithPrevEndpoint.length === 0) {
          console.log('SHUTDOWN INTERVAL')
        }
      }



      const dropConnectionToEndpoint = ''

      return updatedUser
    }
  }
}

module.exports = {
  userResolvers
}