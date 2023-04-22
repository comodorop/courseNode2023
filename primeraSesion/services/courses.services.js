const repositoryCourses = require("../repository/courses.repository")

function saveCourses(data){
    console.log("Logica de negocios")
    repositoryCourses(data)
}


module.exports= {
    saveCourses
}