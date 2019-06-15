const axios = require('axios')

const sensorEndpointActions = {
  Mutation: {
    startWatering: (root, { sensorEndpoint }) => {
      axios.get(sensorEndpoint)
      return { message: 'Watering started' }
    },
    stopWatering: (root, { sensorEndpoint }) => {
      axios.get(sensorEndpoint)
      return { message: 'Watering started' }
    },
    reboot: (root, { sensorEndpoint }) => {
      axios.get(sensorEndpoint)
      return { message: 'Watering started' }
    },
    validateSensorEndpoint: async (root, { sensorEndpoint }) => {
      const { data } = await axios.get(sensorEndpoint)

      if (data.sensors !== undefined) {
        return {message: 'Valid endpoint'}
      }

      return {message: 'invalid endpoint'}
    }
  }
}

module.exports = { sensorEndpointActions }