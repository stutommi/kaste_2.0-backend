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
    'nutrient',
    'light',
    'soil_moisture'
  ]

  // format sensors for update
  sensors.forEach(async sensor => {
    const measures = Object.keys(sensor)
      .filter(key => measureTypes.includes(key))
      .reduce((res, key) => (res[key] = sensor[key], res), {})

    try {
      await SensorDataByDay
        .updateOne({
          sensorId: sensor.id,
          day: moment.utc().startOf('day'),
          owner: sensor.owner
        }, {
            $push: { measures: measures }
          }, { upsert: true })
    } catch (error) {
      console.error(error.message)
    }

  })

  console.log('Update:' + new Date(Date.now()).toUTCString())
}


/////////////////////////////////////////////////////////////
// START FETCHING ALL SENSORS WHICH USERS ARE CONNECTED TO //
/////////////////////////////////////////////////////////////

const startFetchingAllEndpoints = async (fetchFunc) => {
  // Find all users with sensorEndpoints
  const allUsers = await User.find({ sensorEndpoint: { $ne: '' } })
  console.log('*************')

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
      1000)
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

const connectSensorUrlIfNew = async newUrl => {
  const usersWithNewEndpoint = await User.find({ sensorEndpoint: newUrl })

  if (usersWithNewEndpoint.length === 0) {
    console.log('START FETCHING NEW URL')

  }

}

////////////////////////////////////////////////////////////////////
// QUIT FETCHING ENDPOINT IF IT DOESN'T HAVE ANY USERS CONNECTED  //
////////////////////////////////////////////////////////////////////

const disconnectIfNoUsers = async (url, intervalIdObject) => {
  console.log('HERE')

  const usersWithEndpoint = await User.find({ sensorEndpoint: url })

  if (usersWithEndpoint.length === 0) {
    console.log('DELETING ENDPOINT: ', url)
    clearInterval(intervalIdObject[url])
    delete intervalIdObject[url]
  }
}

module.exports = { fetchSensors, startFetchingAllEndpoints, connectSensorUrlIfNew, disconnectIfNoUsers }