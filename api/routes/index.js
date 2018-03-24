var express = require('express'),
  faceCtrl = require('../controllers/Rekognition.js'),
  twit = require('../controllers/twit.js'),
  cors = require('cors'),
  router = express.Router();

// app = express();
router.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  })
);

router.get('/face', faceCtrl.faceAnalyze);

router.get('/tweet', twit.tweetAnalyze);

module.exports = router;