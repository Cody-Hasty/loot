const s3 = require("../s3/config");
const multer = require('multer');
const multerS3 = require('multer-s3');
const upload = multer({
    storage: multerS3({
        s3: s3.s3Client,
        bucket: s3.uploadParams.Bucket,
        key: function (req, file, cb) {
            // console.log(file);
            cb(null, file.originalname);
        }
    })
});

module.exports = upload;