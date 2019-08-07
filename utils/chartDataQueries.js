// Libraries
const moment = require('moment')
// Models
const SensorData = require('../models/sensorDataByDay')

//**********************************//
// 1.1: sensor queries: TYPE HOUSE  //
// 1.2: sensor queries: TYPE PLANT  //
//**********************************//

///////////////////////
// 1.1 HOUSE SENSORS //
///////////////////////

/////////////////////////////////////
// Query house sensor data by day  //
/////////////////////////////////////

const queryHouseByDay = async (id) => {

  try {
    const response = await SensorData.aggregate([
      { $unwind: '$measures' },
      {
        $project: {
          sensorId: 1,
          day: 1,
          time: '$measures.time',
          humidity: '$measures.humidity',
          temperature_C: '$measures.temperature_C'
        }
      },
      {
        $match: {
          sensorId: { $eq: id },
          day: { $gte: new Date(moment.utc().subtract(1, 'days').startOf('day')) },
          time: { $gte: new Date(moment().subtract(1, 'days').add(3, 'hours')) }
        }
      },
      { $sort: { 'time': 1 } },
    ])
    return response

  } catch (error) {
    console.error(error.message)
  }
}

/////////////////////////////////////
// Query house sensor data by week //
/////////////////////////////////////

const queryHouseByWeek = async (id) => {
  try {
    const response = await SensorData.aggregate([
      { $unwind: '$measures' },
      {
        $project: {
          sensorId: 1,
          day: 1,
          hour: { $hour: '$measures.time' },
          minute: { $minute: '$measures.time' },
          time: '$measures.time',
          humidity: '$measures.humidity',
          temperature_C: '$measures.temperature_C'
        }
      },
      {
        $match: {
          sensorId: { $eq: id },
          day: { $gte: new Date(moment.utc().subtract(1, 'weeks').startOf('day')) },
          hour: { $in: [0, 3, 6, 9, 12, 15, 18, 21] },
          minute: { $lt: 30 }
        }
      },
      { $sort: { 'time': 1 } },
    ])

    return response

  } catch (error) {
    console.error(error.message)
  }
}

///////////////////////////////////////
// Query house sensor data by month  //
///////////////////////////////////////

const queryHouseByMonth = async (id) => {
  try {
    const response = await SensorData.aggregate([
      { $unwind: '$measures' },
      {
        $project: {
          sensorId: 1,
          day: 1,
          hour: { $hour: '$measures.time' },
          minute: { $minute: '$measures.time' },
          time: '$measures.time',
          humidity: '$measures.humidity',
          temperature_C: '$measures.temperature_C'
        }
      },
      {
        $match: {
          sensorId: { $eq: id },
          day: { $gte: new Date(moment.utc().subtract(1, 'months').startOf('day')) },
          hour: { $in: [0, 3, 6, 9, 12, 15, 18, 21] },
          minute: { $lt: 30 }
        }
      },
      { $sort: { 'time': 1 } },
    ])

    return response

  } catch (error) {
    console.error(error.message)
  }
}

//////////////////////////////////////
// Query house sensor data by year  //
//////////////////////////////////////

const queryHouseByYear = async (id) => {
  try {
    const response = await SensorData.aggregate([
      { $unwind: '$measures' },
      {
        $project: {
          sensorId: 1,
          day: 1,
          hour: { $hour: '$measures.time' },
          minute: { $minute: '$measures.time' },
          time: '$measures.time',
          humidity: '$measures.humidity',
          temperature_C: '$measures.temperature_C'
        }
      },
      {
        $match: {
          sensorId: { $eq: id },
          day: { $gte: new Date(moment.utc().subtract(1, 'years').startOf('day')) },
          hour: { $in: [0, 3, 6, 9, 12, 15, 18, 21] },
          minute: { $lt: 30 }
        }
      },
      { $sort: { 'time': 1 } },
    ])

    return response

  } catch (error) {
    console.error(error.message)
  }
}

///////////////////////
// 1.1 PLANT SENSORS //
///////////////////////

/////////////////////////////////////
// Query plant sensor data by day  //
/////////////////////////////////////

const queryPlantByDay = async (id) => {
  try {
    const response = await SensorData.aggregate([
      { $unwind: '$measures' },
      {
        $project: {
          sensorId: 1,
          day: 1,
          hour: { $hour: '$measures.time' },
          time: '$measures.time',
          soil_moisture: '$measures.soil_moisture',
          light_lux: '$measures.light_lux',
          ec_mS_cm: '$measures.ec_mS_cm',
          temperature_C: '$measures.temperature_C',
        }
      },
      {
        $match: {
          sensorId: { $eq: id },
          day: { $gte: new Date(moment.utc().subtract(1, 'days').startOf('day')) },
          time: { $gte: new Date(moment().subtract(1, 'days').add(3, 'hours')) }
        }
      },
      { $sort: { 'time': 1 } },
    ])

    return response

  } catch (error) {
    console.error(error.message)
  }
}

/////////////////////////////////////
// Query plant sensor data by week //
/////////////////////////////////////

const queryPlantByWeek = async (id) => {
  try {
    const response = await SensorData.aggregate([
      { $unwind: '$measures' },
      {
        $project: {
          sensorId: 1,
          day: 1,
          hour: { $hour: '$measures.time' },
          minute: { $minute: '$measures.time' },
          time: '$measures.time',
          soil_moisture: '$measures.soil_moisture',
          light_lux: '$measures.light_lux',
          ec_mS_cm: '$measures.ec_mS_cm',
          temperature_C: '$measures.temperature_C',
        }
      },
      {
        $match: {
          sensorId: { $eq: id },
          day: { $gte: new Date(moment.utc().subtract(1, 'weeks').startOf('day')) },
          hour: { $in: [0, 3, 6, 9, 12, 15, 18, 21] },
          minute: { $lt: 30 }
        }
      },
      { $sort: { 'time': 1 } },
    ])

    return response

  } catch (error) {
    console.error(error.message)
  }
}

///////////////////////////////////////
// Query plant sensor data by month  //
///////////////////////////////////////

const queryPlantByMonth = async (id) => {
  try {
    const response = await SensorData.aggregate([
      { $unwind: '$measures' },
      {
        $project: {
          sensorId: 1,
          day: 1,
          hour: { $hour: '$measures.time' },
          minute: { $minute: '$measures.time' },
          time: '$measures.time',
          soil_moisture: '$measures.soil_moisture',
          light_lux: '$measures.light_lux',
          ec_mS_cm: '$measures.ec_mS_cm',
          temperature_C: '$measures.temperature_C',
        }
      },
      {
        $match: {
          sensorId: { $eq: id },
          day: { $gte: new Date(moment.utc().subtract(1, 'months').startOf('day')) },
          hour: { $in: [0, 3, 6, 9, 12, 15, 18, 21] },
          minute: { $lt: 30 }
        }
      },
      { $sort: { 'time': 1 } },
    ])

    return response

  } catch (error) {
    console.error(error.message)
  }
}

//////////////////////////////////////
// Query plant sensor data by year  //
//////////////////////////////////////

const queryPlantByYear = async (id) => {
  try {
    const response = await SensorData.aggregate([
      { $unwind: '$measures' },
      {
        $project: {
          sensorId: 1,
          day: 1,
          hour: { $hour: '$measures.time' },
          minute: { $minute: '$measures.time' },
          time: '$measures.time',
          soil_moisture: '$measures.soil_moisture',
          light_lux: '$measures.light_lux',
          ec_mS_cm: '$measures.ec_mS_cm',
          temperature_C: '$measures.temperature_C',
        }
      },
      {
        $match: {
          sensorId: { $eq: id },
          day: { $gte: new Date(moment.utc().subtract(1, 'years').startOf('day')) },
          hour: { $in: [0, 3, 6, 9, 12, 15, 18, 21] },
          minute: { $lt: 30 }
        }
      },
      { $sort: { 'time': 1 } },
    ])

    return response

  } catch (error) {
    console.error(error.message)
  }
}

module.exports = {
  queryHouseByDay,
  queryHouseByWeek,
  queryHouseByMonth,
  queryHouseByYear,

  queryPlantByDay,
  queryPlantByWeek,
  queryPlantByMonth,
  queryPlantByYear
}