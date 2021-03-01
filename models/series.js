const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Series = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    release_date: {
      type: String,
      required: true
    },
    eps: {
      type: String,
      required: true
    },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('series', Series)
