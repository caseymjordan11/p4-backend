const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const axios = require("axios")
const mongoose = require('./db/schema.js')

const Rec = mongoose.model('Rec')

const app = express()

app.set("port", process.envPORT || 3001)
app.use(parser.json())
app.use(cors())

const yelp = require('yelp-fusion')
const client = yelp.client("abQe6754VP9zrHoU-NslnDZHixG7a_Oft_MCEwIAu0zoI65s5PA2X_BwbGUsVYee0Q9krQOOE_6RI6kbFemDC_yFx2KkWUCsJsAZQ9F5ca8pOYdGk55_C6fEZFRSWnYx")


app.get("/api/yelp/:cuisine/:lat/:lng/:priceLevel", (req,res) => {
  client.search({
    term: req.params.cuisine,
    latitude: req.params.lat,
    longitude: req.params.lng,
    price: req.params.priceLevel,
    radius: "5000",
    limit: "20"
  })
  .then(data => {
    console.log(data)
    res.json(data)
  })
  .catch(err => {
    console.log(err)
  })
})


app.post("/api/save", (req,res) => {
  Rec.create(req.body)
  .then((rec) => {
    res.json(rec)
  })
  .catch(err => {
    console.log(err)
  })
})

app.listen(app.get("port"), () => {
  console.log("Lisening on port " + app.get("port"))
})
