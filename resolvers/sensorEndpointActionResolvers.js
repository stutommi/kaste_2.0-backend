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
    }
  }
}

module.exports = { sensorEndpointActions }