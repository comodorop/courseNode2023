const { development } = require("../knexfile")

const cn = require('knex')(development);

function getConnection() {
    return cn
}


module.exports = {
    getConnection
}