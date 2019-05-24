// Libraries
const bcrypt = require('bcrypt')
const { UserInputError, AuthenticationError } = require('apollo-server')
// Models
const Message = require('../models/message')
const User = require('../models/user')
// Utils
const logger = require('../utils/logger')

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
    createMessage: async (root, args, { currentUser, hei }) => {
      console.log('args createMessage', args)
      console.log('currentUser', currentUser)
      console.log('hei', hei)

      if (!currentUser) {
        throw new AuthenticationError('Not authenticated')
      }

      const newMessage = new Message({
        content: args.content,
        user: currentUser._id,
      })

      try {
        await newMessage.save()
        console.log('haloo')

        const savedMessage = await Message.findOne({ user: currentUser._id })
          .populate('user', { username: 1, name: 1, id: 1 })

        console.log('savedMessage', savedMessage)
        console.log('currentUser.messages', currentUser.messages)
        console.log('currentUser._id', currentUser._id)


        await User.findByIdAndUpdate(currentUser._id, {
          messages: currentUser.messages.concat(savedMessage._id)
        })

        return savedMessage
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }

    }
  }
}

module.exports = {
  userResolvers
}