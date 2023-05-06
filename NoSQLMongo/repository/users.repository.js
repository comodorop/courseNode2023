
const users = require("../models/users.model")

async function save(body){
    return await users.create(body)
}

async function get(){
    return await users.find()
}

module.exports={
    save,
    get
}