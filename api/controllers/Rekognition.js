var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'AKIAIGF37SV5PBKPFPTQ',
    secretAccessKey: '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',
    region: 'us-east-1'
});


var rekognition = new AWS.Rekognition();


var params = {
    Image: {
        /* required */
        S3Object: {
            Bucket: 'mmsmhh-emotionrecognition',
            Name: 'saleh.jpg' // TODO: get upload photo
        }
    },
    Attributes: [
        "ALL", "DEFAULT"
    ]
};


module.exports.faceAnalyze = function (req, res, next) {

    rekognition.detectFaces(params, function (err, data) {
      if (err) return next(err);

      else {
          var x = data.FaceDetails[0].Emotions;

          var maxname = "";
          var maxvalue = 0;


          x.filter(function (value) {
              //
              // console.log(value.Confidence)
              // console.log(value.Type)

              if (value.Confidence > maxvalue) {
                  maxvalue = value.Confidence;
                  maxname = value.Type;
              }

          });

          res.status(200).json({
            err: null,
            msg: 'Users retrieved successfully.',
            data: maxname
          });
          // console.log("And the r is")
          //
          // console.log(maxname)
      }

  })
};
