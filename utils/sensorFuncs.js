// Libraries
const axios = require('axios')
const moment = require('moment')
// Models
const SensorDataByDay = require('../models/sensorDataByDay')
const User = require('../models/user')

////////////////////////////////////////////
// FETCH SENSORS FROM SINGLE URL ENDPOINT //
////////////////////////////////////////////

const fetchSensors = async url => {
  try {
    const { data } = await axios.get(url)
    // Merge different sensortypes
    const sensors = Object.values(data.sensors)
      .reduce((acc, cur) => acc.concat(cur))
    
    const measureTypes = [
      'temperature_C',
      'type',
      'location',
      'time',
      'humidity',
      'ec_mS_cm',
      'light_lux',
      'soil_moisture',
      'name',
      'CO2_ppm'
    ]

    // format sensors for update to DB
    sensors.forEach(async sensor => {
      const measures = Object.keys(sensor)
        .filter(key => measureTypes.includes(key))
        .reduce((res, key) => (res[key] = sensor[key], res), {})

      await SensorDataByDay
        .updateOne({
          sensorId: sensor.id,
          day: moment.utc().startOf('day'),
          owner: sensor.owner
        }, {
          $push: { measures: measures }
        }, { upsert: true })

    })

    console.log('Update:' + new Date(Date.now()).toUTCString())
  }
  catch (error) {
    console.error(error)
  }
}


/////////////////////////////////////////////////////////////
// START FETCHING ALL SENSORS WHICH USERS ARE CONNECTED TO //
/////////////////////////////////////////////////////////////

const startFetchingAllEndpoints = async (fetchFunc) => {
  // Find all users with sensorEndpoints
  const allUsers = await User.find({ sensorEndpoint: { $ne: '' } })

  const endpointArray = allUsers
    .map(user => user.sensorEndpoint)
    .reduce((acc, cur) => {
      if (!acc.includes(cur)) {
        acc.push(cur)
      }
      return acc
    }, [])

  // Returns interval IDs and endpoints wrapped in objects to on Array
  const intervalIdArray = endpointArray.map(endpoint => {
    // Initial fetch
    fetchFunc(endpoint)
    // Set interval and store Id in variable
    const intervalId = setInterval(() => {
      fetchFunc(endpoint)
    },
    // Granularity for fetching (30mins)
    1000 * 60 * 30)
    return { endpoint, intervalId }
  })

  const intervalIdObject = intervalIdArray
    .reduce((acc, cur) => {
      acc[cur.endpoint] = cur.intervalId
      return acc
    }, {})

  return intervalIdObject
}

//////////////////////////////////////////////////////////////////////
// START FETCHING FROM NEW ENDPOINT IF IT DOESN'T HAVE ANY CURRENT  //
// USERS CONNECTED                                                  //
//////////////////////////////////////////////////////////////////////

const connectSensorUrlIfNew = async (newUrl, intervalIdObject) => {
  const usersWithNewEndpoint = await User.find({ sensorEndpoint: newUrl })

  // Check if only one user has new sensor endpoint
  if (usersWithNewEndpoint.length === 1) {
    console.log('CONNECTING ENDPOINT')

    fetchSensors(newUrl)
    const intervalId = setInterval(() => {
      fetchSensors(newUrl)
      // Granularity for fetching (30mins)
    }, 1000 * 60 * 30)

    // Add interval id to interval object
    intervalIdObject[newUrl] = intervalId
  }
}

////////////////////////////////////////////////////////////////////
// QUIT FETCHING ENDPOINT IF IT DOESN'T HAVE ANY USERS CONNECTED  //
////////////////////////////////////////////////////////////////////

const disconnectIfNoUsers = async (url, intervalIdObject) => {
  const usersWithEndpoint = await User.find({ sensorEndpoint: url })

  if (usersWithEndpoint.length === 0) {
    console.log('DELETING ENDPOINT: ', url)
    clearInterval(intervalIdObject[url])
    delete intervalIdObject[url]
  }
}

module.exports = { fetchSensors, startFetchingAllEndpoints, connectSensorUrlIfNew, disconnectIfNoUsers }