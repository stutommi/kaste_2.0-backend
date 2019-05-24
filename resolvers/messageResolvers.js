// Libraries
const { UserInputError, AuthenticationError } = require('apollo-server')
// Models
const Message = require('../models/message')
const User = require('../models/user')
// Utils
const logger = require('../utils/logger')

const messageResolvers = {
  Query: {
    messages: () => Message.find({})
      .populate('user', { username: 1, name: 1, id: 1 })
  },
  Mutation: {
    createMessage: async (root, args, { currentUser }) => {
      console.log('args createMessage', args)
      console.log('currentUser', currentUser)

      if (!currentUser) {
        throw new AuthenticationError('Not authenticated')
      }

      const newMessage = new Message({
        content: args.content,
        user: currentUser._id,
      })

      try {
        await newMessage.save()

        const savedMessage = await Message.findOne({ user: currentUser._id })
          .populate('user', { username: 1, name: 1, id: 1 })

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
  messageResolvers
}