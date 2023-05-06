const mongoose = require("mongoose")
const { v4 } = require('uuid');
const schema = mongoose.Schema
const moment = require("moment")
const users = new schema({
    uuid: {type: String, default: v4()},
    name: {type: String, require: true},
    user: {type: String, require: true},
    passsword: {type: String, require: true},
    createdAt:{ type: Date, default: moment().utc().format("YYYY-MM-DD")}
})
module.exports = mongoose.model("Users", users)