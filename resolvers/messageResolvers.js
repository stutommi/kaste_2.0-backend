// Libraries
const { UserInputError, AuthenticationError, PubSub } = require('apollo-server')
// Models
const Message = require('../models/message')
const User = require('../models/user')
// Utils
const pubsub = new PubSub()

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
        // Save new message
        const savedMessage = await newMessage.save()
        console.log('savedMessage', savedMessage)

        const populatedMessage = await Message.findById(savedMessage._id)
          .populate('user')
        console.log('populatedMessage', populatedMessage)
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
      subscribe: () => pubsub.asyncIterator(([['messageAdded']]))
    }
  }
}

module.exports = {
  messageResolvers
}