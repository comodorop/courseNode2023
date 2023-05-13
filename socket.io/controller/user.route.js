const express = require("express")
const routes = express.Router()
const { getSocket } = require("../socket")

routes.get("/", async (req, res) => {
    try {
        console.log("Se estan obteniendo los usuaiors")
        let io = await getSocket()
        io.emit("lstUsers", {msg:"Someone get data of users"})
        res.status(201).send({ data: [], msg: "Data..." })
    } catch (error) {
        res.status(500).send({ msg: "There is a problem" })
    }
})

module.exports = routes