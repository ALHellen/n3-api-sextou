const express = require("express")
const app = express()

const index = require("./routes/index")

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*")
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })
  
app.use("/", index)

module.exports = app