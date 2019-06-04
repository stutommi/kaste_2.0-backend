// Libraries
const moment = require('moment')

// Models
const SensorData = require('../models/sensorDataByDay')

const chartDataResolvers = {
  Query: {
    chartData: async (roots, args) => {
      console.log(new Date(moment.utc().startOf('day')))

      try {
        const response = await SensorData.aggregate([
          {
            $match: {
              sensorId: { $eq: 4489 },
              day: { $eq: new Date(moment.utc().startOf('day')) },
            }
          },
          { $unwind: '$measures' },
          { $limit: 50 },
          {
            $match: {
              'measures.humidity': { $gt: 44 },
            }
          },
        ])
        console.log('response', response)

      } catch (error) {
        console.error(error.message)
      }

    }
  }
}

module.exports = { chartDataResolvers }