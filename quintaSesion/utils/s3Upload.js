
const AWS = require("aws-sdk")
AWS.config.update({
    accessKeyId: "AKIATG7SIEFIUQSRHUVI",
    secretAccessKey: "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"
})

async function uploadFiles(name, buffer, ContentType) {
    const s3 = new AWS.S3()
    let params = {
        ACL: "public-read",
        Body: buffer,
        Bucket:"coursenodejstestdeleteme",
        ContentType: ContentType,
        Key: name
    }
    let data = await s3.upload(params).promise()
    console.log(data)
}


module.exports = {
    uploadFiles
}