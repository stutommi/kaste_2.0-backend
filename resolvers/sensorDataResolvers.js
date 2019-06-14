const axios = require('axios')

const sensorDataResolvers = {
  Query: {
    sensorData: async (root, { sensorEndpoint }) => {
      console.log('Fired')
      const response = await axios.get(sensorEndpoint)
      return {value: JSON.stringify(response.data)}

    }
  }
}

module.exports = { sensorDataResolvers }