const express = require("express")
const bodyParser = require('body-parser')
const courses = require("./controller/courses.controller")
const app = express()
const {validate} = require("./midlewares/middleware")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/v1/courses",validate, courses)
// http: GET,  DELETE, POST, PUT, PATCH
// HTTP STATUS: 200, 201, 404, 401, 500
app.listen(3000, () => {
    console.log("Server its running in the port 3000")
})
