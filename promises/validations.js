(async () => {
    async function validateAge(age) {
        if (age > 18) {
            return true
        }
    }
    function validateAge2(age) {
        return new Promise((resolve, reject) => {
            if (age > 18) {
                resolve(true)
            } else {
                reject(false)
            }
        })
    }

    async function saveLog(product) {
        console.log(`Se guardo un log del producto ${product.name}`)
        return "log"
    }

    function saveProduct(product) {
        return new Promise((resolve, reject) => {
            console.log(`Se guardo un producto ${product.name}`)
            resolve("product")
        })
    }

    let producto = await saveProduct({ name: "coca cola" })
    console.log(producto)
    let log = await saveLog({ name: "coca cola" })
    console.log(log)
    console.log("---------------------")
    let promises = []
    promises.push(saveProduct({ name: "coca cola" }))
    promises.push(saveLog({ name: "coca cola" }))

    let [saveProductPromise, saveLogPromise] = await Promise.all(promises)
    console.log(saveProductPromise)
    console.log(saveLogPromise)
    // validateAge(19).then(msg => {
    //     console.log(msg)
    // }).catch(err => {
    //     console.log(msg)
    // })
    // try {
    //     let isOk = await validateAge(20)
    //     console.log(isOk)
    // } catch (error) {
    //     console.log(err)
    // }
})()