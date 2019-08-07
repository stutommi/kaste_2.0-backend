// Queries
const {
  queryHouseByDay,
  queryHouseByWeek,
  queryHouseByMonth,
  queryHouseByYear,

  queryPlantByDay,
  queryPlantByWeek,
  queryPlantByMonth,
  queryPlantByYear

} = require('../utils/chartDataQueries')

const chartDataResolvers = {
  Query: {
    chartData: async (root, { id, type, range }) => {

      if (type === 'HOUSE') {

        // Helper func to format house type sensor response manually..
        const formatHouseResponse = (response) => {
          const formattedResponse = response
            .reduce((obj, cur) => {

              obj.time.push(cur.time)
              obj.humidity.push(cur.humidity)
              obj.temperature_C.push(cur.temperature_C)
              if (obj.CO2_ppm != undefined) {
                obj.CO2_ppm.push(cur.CO2_ppm)
              }

              return obj
            }, { time: [], humidity: [], temperature_C: [], CO2_ppm: [] })

          return formattedResponse
        }

        switch (range) {
        case 'DAY':
          return queryHouseByDay(id)
            .then(res => {
              return formatHouseResponse(res)
            })
        case 'WEEK':
          return queryHouseByWeek(id)
            .then(res => {
              return formatHouseResponse(res)
            })
        case 'MONTH':
          return queryHouseByMonth(id)
            .then(res => {
              return formatHouseResponse(res)
            })
        case 'YEAR':
          return queryHouseByYear(id)
            .then(res => {
              return formatHouseResponse(res)
            })
        }
      }

      if (type === 'PLANT') {

        // Helper func to format plant type sensor response manually..
        const formatPlantResponse = (response) => {
          const formattedResponse = response
            .reduce((obj, cur) => {

              obj.name.push(cur.name)
              obj.time.push(cur.time)
              obj.temperature_C.push(cur.temperature_C)
              obj.soil_moisture.push(cur.soil_moisture)
              obj.light_lux.push(cur.light_lux)
              obj.ec_mS_cm.push(cur.ec_mS_cm)

              return obj
            }, {
              name: [],
              time: [],
              temperature_C: [],
              soil_moisture: [],
              light_lux: [],
              ec_mS_cm: []
            })

          return formattedResponse
        }

        switch (range) {
        case 'DAY':
          return queryPlantByDay(id)
            .then(res => {
              return formatPlantResponse(res)
            })
        case 'WEEK':
          return queryPlantByWeek(id)
            .then(res => {
              return formatPlantResponse(res)
            })
        case 'MONTH':
          return queryPlantByMonth(id)
            .then(res => {
              return formatPlantResponse(res)
            })
        case 'YEAR':
          return queryPlantByYear(id)
            .then(res => {
              return formatPlantResponse(res)
            })
        }
      }

    }
  }
}


module.exports = { chartDataResolvers }