const mongoose = require("./connection.js")

const ReccomendationSchema = new mongoose.Schema({
  name: String,
  food: String,
  rating: String,
  city: String,
  phone: String,
  url: String
})

mongoose.model("Rec", ReccomendationSchema)

module.exports = mongoose
