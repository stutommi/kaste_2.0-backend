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

      const start = Date.now()
      console.log('ID: ', id, 'TYPE: ', type, 'RANGE: ', range)

      if (type === 'HOUSE') {

        // Helper func to format house type sensor response manually..
        const formatHouseResponse = (response) => {
          const formattedResponse = response
            .reduce((obj, cur) => {

              obj.time.push(cur.time)
              obj.humidity.push(cur.humidity)
              obj.temperatureC.push(cur.temperature)

              return obj
            }, { time: [], humidity: [], temperatureC: [] })

          return formattedResponse
        }

        switch (range) {
        case 'DAY':
          return queryHouseByDay(id)
            .then(res => {
              console.log('TIME', Date.now() - start)
              return formatHouseResponse(res)
            })
        case 'WEEK':
          return queryHouseByWeek(id)
            .then(res => {
              console.log('TIME', Date.now() - start)
              return formatHouseResponse(res)
            })
        case 'MONTH':
          return queryHouseByMonth(id)
            .then(res => {
              console.log('TIME', Date.now() - start)
              return formatHouseResponse(res)
            })
        case 'YEAR':
          return queryHouseByYear(id)
            .then(res => {
              console.log('TIME', Date.now() - start)
              return formatHouseResponse(res)
            })
        }
      }

      if (type === 'PLANT') {

        // Helper func to format house type sensor response manually..
        const formatPlantResponse = (response) => {
          const formattedResponse = response
            .reduce((obj, cur) => {

              obj.time.push(cur.time)
              obj.temperatureC.push(cur.temperature)
              obj.soilMoisture.push(cur.soilMoisture)
              obj.light.push(cur.light)
              obj.nutrient.push(cur.nutrient)

              return obj
            }, {
              time: [],
              temperatureC: [],
              soilMoisture: [],
              light: [],
              nutrient: []
            })

          return formattedResponse
        }

        switch (range) {
        case 'DAY':
          return queryPlantByDay(id)
            .then(res => {
              console.log(res[0])

              console.log('TIME', Date.now() - start)
              return formatPlantResponse(res)
            })
        case 'WEEK':
          return queryPlantByWeek(id)
            .then(res => {
              console.log('TIME', Date.now() - start)
              return formatPlantResponse(res)
            })
        case 'MONTH':
          return queryPlantByMonth(id)
            .then(res => {
              console.log('TIME', Date.now() - start)
              return formatPlantResponse(res)
            })
        case 'YEAR':
          return queryPlantByYear(id)
            .then(res => {
              console.log('TIME', Date.now() - start)
              return formatPlantResponse(res)
            })
        }
      }

    }
  }
}


module.exports = { chartDataResolvers }