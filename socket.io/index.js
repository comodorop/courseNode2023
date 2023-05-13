const express = require("express")
const { initialSocket } = require("./socket")
const users = require("./controller/user.route")
const app = express()
app.use("/v1/users", users)

const server = app.listen("6000", () => {
    console.log("Server its running in the port 6000")
})

initialSocket(server).then(io=>{
    io.on("connection", (objSocket)=>{
        console.log("User connected")
    })
})