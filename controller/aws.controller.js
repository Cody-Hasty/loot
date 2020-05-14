const s3 = require("../config/s3/config");

exports.doUpload = (req, res) =>{
    const s3Client = s3.s3Client;
    const params = s3.uploadParams;

    params.Key = req.file.originalname;
    params.Body = req.file.buffer;

    s3Client.upload(params, (err, data) => {
        if(err){
            res.status(500).json({error: "error->" + err});
        }
        
        const url = s3Client.getSignedUrl('getObject', {
            Bucket: params.Bucket,
            Key: req.file.originalname
        })
        
        res.json({ message: "File uploaded successfully -> keyname:" + req.file.originalname, url: url });
        
    });
    


};