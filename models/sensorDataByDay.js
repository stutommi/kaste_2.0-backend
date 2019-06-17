const mongoose = require('mongoose')

const sensorDataSchema = mongoose.Schema({

  // Required fields
  time: {
    type: Date,
    required: true
  },
  temperature_C: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },

  // Type specific fields

  humidity: {
    type: Number
  },
  soil_moisture: {
    type: Number
  },
  light: {
    type: Number
  },
  nutrient: {
    type: Number
  }

})

const sensorDataByDaySchema = mongoose.Schema({
  sensorId: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  day: {
    type: Date,
    // Mongo removes document after a year
    expires: 60*60*24*7*4*12,
    required: true
  },
  measures: [sensorDataSchema]

})

module.exports = mongoose.model('SensorData', sensorDataByDaySchema)