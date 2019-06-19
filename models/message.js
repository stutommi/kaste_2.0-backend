const mongoose = require('mongoose')

const schema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 1,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created: {
    type: Date,
    default: Date.now,
  },
},
)

module.exports = mongoose.model('Message', schema)