// Libraries
const { UserInputError, AuthenticationError, PubSub } = require('apollo-server')
// Models
const Message = require('../models/message')
const User = require('../models/user')

const pubsub = new PubSub()

const messageResolvers = {
  Query: {
    messages: () => Message.find({})
      .populate('user', { username: 1, name: 1, id: 1 })
  },
  Mutation: {
    createMessage: async (root, args, { currentUser }) => {
      if (!currentUser) {
        throw new AuthenticationError('Not authenticated')
      }

      const newMessage = new Message({
        content: args.content,
        user: currentUser._id,
      })

      try {
        // Save new message
        const savedMessage = await newMessage.save()

        const populatedMessage = await Message.findById(savedMessage._id)
          .populate('user')

        // Update users messages array
        await User.findByIdAndUpdate(currentUser._id, {
          messages: currentUser.messages.concat(savedMessage._id)
        })

        // For subscriptions
        pubsub.publish('messageAdded', {messageAdded: populatedMessage})

        return populatedMessage
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args })
      }
    }
  },
  Subscription: {
    messageAdded: {
      subscribe: () => {
        return pubsub.asyncIterator(([['messageAdded']])) }
    }
  }
}

module.exports = {
  messageResolvers
}