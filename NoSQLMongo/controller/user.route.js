const express = require("express")
const routes = express.Router()
const { saveUser, getUsers } = require("../services/users.services")

routes.post("/", async (req, res) => {
    try {
        let { body } = req
        console.log(body)
        let user = await saveUser(body)
        res.status(201).send({ msg: "New record avaliabled" })
    } catch (error) {
        res.status(500).send({ msg: "There is a problem" })
    }
})
routes.get("/", async (req, res) => {
    try {
        let lstUsers = await getUsers()
        res.status(201).send({ data: lstUsers, msg: "Data..." })
    } catch (error) {
        res.status(500).send({ msg: "There is a problem" })
    }
})




module.exports = routes