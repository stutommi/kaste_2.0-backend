const axios = require('axios')

// This resolver simply directs the client request and returns
// JSON data from sensor endpoint

const sensorDataResolvers = {
  Query: {
    sensorData: async (root, { sensorEndpoint }) => {
      const response = await axios.get(sensorEndpoint)
      return {value: JSON.stringify(response.data)}

    }
  }
}

module.exports = { sensorDataResolvers }