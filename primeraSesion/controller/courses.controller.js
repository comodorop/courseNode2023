const express = require("express")
const routes = express.Router()
let courses = ["Node", "Nest", "Go"]
const servicesCourse = require("../services/courses.services")


routes.get('/', (req, res) => {
    res.status(200).send({status: 200, msg:"List of courses", data: courses})
})

routes.post('/', (req, res) => {
    let { body } = req
    servicesCourse.saveCourses(body)
    res.status(201).send({status: 201, msg:"New record avaliabled"})
})

module.exports = routes