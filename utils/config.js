if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

let SECRET = process.env.SECRET
let PORT = process.env.PORT
let mongoUrl = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
  mongoUrl = process.env.TEST_MONGODB_URI
}
        
module.exports = {
  PORT,
  mongoUrl,
  SECRET
}