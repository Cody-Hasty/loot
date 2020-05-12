const awsController = require("../../controller/aws.controller");
const upload = require("../../config/multer/config");

module.exports = (app) => {
    app.post("/api/upload", upload.single("photo"), awsController.doUpload);
};