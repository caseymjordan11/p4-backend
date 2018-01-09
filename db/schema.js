const mongoose = require("./connection.js")

const ReccomendationSchema = new mongoose.Schema({
  date: String,
  day: String,
  time: String,
  cuisine: String,
  delivery: String,
  priceLevel: String,
  acceptedRec: String,
  restaurant: String
})

const Rec = mongoose.model("Rec", ReccomendationSchema)

module.exports = {
  Rec
}
