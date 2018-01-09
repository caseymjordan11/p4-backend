const express = require("express")
const parser = require("body-parser")
const cors = require("cors")
const { Rec } = require("./db/schema.js")
const axios = require("axios")
const yelp = require('yelp-fusion')

const app = express()

app.set("port", process.envPORT || 3001)
app.use(parser.json())
app.use(cors())


const client = yelp.client(abQe6754VP9zrHoU-NslnDZHixG7a_Oft_MCEwIAu0zoI65s5PA2X_BwbGUsVYee0Q9krQOOE_6RI6kbFemDC_yFx2KkWUCsJsAZQ9F5ca8pOYdGk55_C6fEZFRSWnYx)


app.get("/api/:cuisine/:priceLevel/:lat/:lng/:radius", (req,res) => {
  client.search({
    term: req.params.cuisine,
    latitude: req.params.lat,
    longitude: req.params.lng,
    price: req.params.priceLevel,
    radius: req.params.radius
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
})

app.listen(app.get("port"), () => {
  console.log("Lisening on port " + app.get("port"))
})
