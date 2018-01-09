const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/p4-backend", { useMongoClient: true })
mongoose.Promies = Promise

module.exports = mongoose
