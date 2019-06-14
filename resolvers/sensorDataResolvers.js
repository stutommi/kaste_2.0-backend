const axios = require('axios')

const sensorDataResolvers = {
  Query: {
    sensorData: async (root, { sensorEndpoint }) => {
      const response = await axios.get(sensorEndpoint)
      return {value: JSON.stringify(response.data)}

    }
  }
}

module.exports = { sensorDataResolvers }