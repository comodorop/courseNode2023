const {save, get } = require("../repository/users.repository")


async function saveUser(body){
    return await save(body)
}

async function getUsers(body){
    return await get()
}



module.exports={
    saveUser,
    getUsers
}