 const { Rec } = require("./schema.js")
 const seedData = require("./seeds.json")

 Rec.remove({}).then(() => {
   seedData.forEach(data => {
     Rec.create(data)
     .then(data => {
       console.log(data)
       process.exit()
     })
     .catch(err => {
       console.log(err)
     })
   })
 })
