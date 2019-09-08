const { fetchSensors, startFetchingAllEndpoints, } = require('./utils/sensorFuncs')

let intervalIdObject
// Starts fetching sensor urls and stores intervals in an object
if (process.env.NODE_ENV === 'production') {
  startFetchingAllEndpoints(fetchSensors)
    .then(endpointIntervals => {
      intervalIdObject = endpointIntervals
    })
}

module.exports = {
  get: () => intervalIdObject,
}