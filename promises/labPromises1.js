(async () => {
    let emails = ["email.com", "hola@ascodecodigo.com", "cesar@hotmail.com", "adiel@"]
    async function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) return email
        else return ""
    }
    let lstPromises = []
    for (let email of emails) {
        lstPromises.push(validateEmail(email))
    }
    let emailsInvalids = await Promise.all(lstPromises)
    console.log(emailsInvalids)
})()