const { fetchSensors, startFetchingAllEndpoints, } = require('./utils/sensorFuncs')

// Starts fetching sensor urls and stores intervals in an object
let intervalIdObject = startFetchingAllEndpoints(fetchSensors)
  .then(endpointIntervals => {
    intervalIdObject = endpointIntervals
  })

module.exports = {
  get: () => intervalIdObject,
}