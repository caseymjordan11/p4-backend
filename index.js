const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const { Rec } = require("./db/schema.js")
const axios = require("axios")

const app = express()

app.set("port", process.envPORT || 3001)
app.use(parser.json())
app.use(cors())

const yelp = require('yelp-fusion')
const client = yelp.client("abQe6754VP9zrHoU-NslnDZHixG7a_Oft_MCEwIAu0zoI65s5PA2X_BwbGUsVYee0Q9krQOOE_6RI6kbFemDC_yFx2KkWUCsJsAZQ9F5ca8pOYdGk55_C6fEZFRSWnYx")
const googleKey = "AIzaSyCBmRKMME2_cxueT5MwzaHTawrMSAM7z1o"


app.get("/api/yelp/:cuisine/:lng/:lat/:priceLevel", (req,res) => {
  client.search({
    term: req.params.cuisine,
    longitude: req.params.lng,
    latitude: req.params.lat,
    price: req.params.priceLevel,
    radius: "10000",
    limit: "50"
  })
  .then(data => {
    console.log(data)
    res.json(data)
  })
  .catch(err => {
    console.log(err)
  })
})

app.get("/api/google/:street/:city/:state/:zipcode", (req,res) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.street},${req.params.city},${req.params.state},${req.params.zipcode}&key=${googleKey}`,
      {}
    )
    .then(data => {
      res.json(data2)
    })
    .catch(err => {
      console.log(err)
    })
})


app.listen(app.get("port"), () => {
  console.log("Lisening on port " + app.get("port"))
})
