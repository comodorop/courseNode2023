const express = require("express")
const routes = express.Router()
const {saveUsers} = require("../services/users.services")

routes.post('/', async (req, res) => {
    let { body } = req
    let data = await saveUsers(body)
    res.status(201).send({ status: 201, msg: "New record avaliabled", data })
})

module.exports = routes 