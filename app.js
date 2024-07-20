const request = require('request')

const forecast  = require("./data1/forecast.js")
const geoCode  = require("./data1/geoCode.js")


const country =process.argv[2];
geoCode(country,(error, data)=>{
   console.log("Error: ",error)
   console.log("DATA: ",data)


   forecast (data.latitude,data.longitude,(error,data)=>{
      console.log("Error: ", error)
      console.log("DATA: ", data)
   })
})












