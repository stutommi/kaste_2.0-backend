const { fetchSensors, startFetchingAllEndpoints, disconnectIfNoUsers } = require('./utils/sensorFuncs')

// object to store intervals to
let intervalIdObject = startFetchingAllEndpoints(fetchSensors)
  .then(endpointIntervals => {
    intervalIdObject = endpointIntervals
  })


setInterval(() => {

}, 1000)
// setTimeout(() => {
//   disconnectIfNoUsers('http://86.115.57.126:8001/ws/pasila_sensors', intervalIdObject)

// }, 4000)

module.exports = {
  get: () => intervalIdObject,
}