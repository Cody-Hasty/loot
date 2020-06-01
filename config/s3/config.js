const AWS = require('aws-sdk');
let env = "";

if (process.env.NODE_ENV === 'production') {
    env = require("./env_prod.js");
} else {
    env = require("./env.js");
}


const s3Client = new AWS.S3({
    accessKeyId: env.AWS_ACCESS_KEY,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    region: env.REGION
});


const uploadParams = {
    Bucket: env.Bucket,
    Key: "",
    Body: null,
    ACL: "public-read"
};

const s3 = {};
s3.s3Client = s3Client;
s3.uploadParams = uploadParams;

module.exports = s3;