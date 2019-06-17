const axios = require('axios')

const sensorEndpointActions = {
  Mutation: {
    startWatering: async (root, { sensorEndpoint }) => {
      try {
        axios.get(sensorEndpoint)
      } catch (error) {
        throw new Error('failed connecting to endpoint')
      }
      return { message: 'Watering started' }
    },
    stopWatering: async (root, { sensorEndpoint }) => {
      try {
        axios.get(sensorEndpoint)
      } catch (error) {
        throw new Error('failed connecting to endpoint')
      }
      return { message: 'Watering started' }
    },
    reboot: async (root, { sensorEndpoint }) => {
      try {
        axios.get(sensorEndpoint)
      } catch (error) {
        throw new Error('failed connecting to endpoint')
      }
      return { message: 'Watering started' }
    },
    validateSensorEndpoint: async (root, { sensorEndpoint }) => {
      try {
        const { data } = await axios.get(sensorEndpoint)
        if (data.sensors !== undefined) {
          return { message: 'Valid endpoint' }
        }

        return { message: 'invalid endpoint' }
      } catch (error) {
        throw new Error('failed connecting to endpoint')
      }
    }
  }
}

module.exports = { sensorEndpointActions }