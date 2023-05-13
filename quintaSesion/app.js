const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const fs = require("fs")
app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const {uploadFiles} = require("./utils/s3Upload")


app.post("/v1/files", async (req, res) => {
    try {
        let { body } = req
        let { files } = req.files
        let { name, data, mimetype } = files
        console.log(files)
        // fs.writeFileSync(`./documents/${name}`, data)
        await uploadFiles(name, data, mimetype)
        res.status(200).send("File upload")
    }
    catch (err) {
        console.log(err)
        res.status(500).send("There is a problem to upload files")
    }
})


app.listen(4001, () => {
    console.log("Server its running in the port 4001")
})