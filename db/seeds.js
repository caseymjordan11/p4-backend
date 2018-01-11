 const seedData = require("./seeds.json")
 const mongoose = require('./schema.js')
 const Rec = mongoose.model('Rec')

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
