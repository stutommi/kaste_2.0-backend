// Libraries
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const http = require('http')
const cors = require('cors')
const moment = require('moment')
const axios = require('axios')
// Models
const User = require('./models/user')
const SensorDataByDay = require('./models/sensorDataByDay')
// Utils
const config = require('./utils/config')
const logger = require('./utils/logger')
// GQLtypeDefs and resolvers
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

mongoose.set('useFindAndModify', false)

mongoose.connect(config.mongoUrl, { useNewUrlParser: true })
  .then(() => logger.info('connected to database'))
  .catch(error => logger.error('error connecting to database', error.message))

const fetchSensors = async url => {
  const { data } = await axios.get(url)

  // Merge different sensortypes
  const sensors = Object.values(data.sensors)
    .reduce((acc, cur) => acc.concat(cur))

  const measureTypes = [
    'temperature_C',
    'type',
    'location',
    'time',
    'humidity',
    'nutrient',
    'light',
    'soil_moisture'
  ]

  sensors.forEach(async sensor => {

    const measures = Object.keys(sensor)
      .filter(key => measureTypes.includes(key))
      .reduce((res, key) => (res[key] = sensor[key], res), {})
    // format sensors for update

    try {
      await SensorDataByDay
        .updateOne({
          sensorId: sensor.id,
          day: moment.utc().startOf('day'),
          owner: sensor.owner
        }, {
          $push: { measures: measures }
        }, { upsert: true })
    } catch (error) {
      console.error(error.message)
    }

  })

  console.log('Update:' + new Date(Date.now()).toLocaleTimeString())
}

fetchSensors('http://86.115.57.126:8001/ws/pasila_sensors')
setInterval(() => {
  fetchSensors('http://86.115.57.126:8001/ws/pasila_sensors')
}, 1000 * 60 * 30)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {

    const authorization = req ? req.headers.authorization : null

    if (authorization && authorization.startsWith('bearer ')) {

      const decodedToken = jwt.verify(authorization.substring(7), config.SECRET)

      const currentUser = await User.findById(decodedToken.id)
        .populate('messages', { content: 1, created: 1, id: 1 })
      return { currentUser }
    }
  }
})

const app = express()
app.use(express.static('build'))
app.use(cors())

server.applyMiddleware({ app })

// Subscriptions
const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: config.PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${config.PORT}${server.subscriptionsPath}`)
})