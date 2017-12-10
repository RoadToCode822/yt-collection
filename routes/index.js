const express = require('express');
const router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var YouTube = require('youtube-node');
var YT = new YouTube();
const { getYTbyId } = require('../actions/index.js')


YT.setKey('AIzaSyDbpr3FzddtbOLSpaZaCMMqNzV2IutIx2Y')


// How do I take users' youtube URL and send a request to the youtube API
// and save some of the data from the object that youtube gives me and
// pass it to the index.ejs view?


/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.collection('YT-videos').find().toArray(function(err, results) {
    console.log(results);
    res.render('index', { ytPP: results });
    /*

    YT.getById('pU9Q6oiQNd0', function(err, YTres) {
      if (err) console.log(err)
      ytData = YTres.items[0];
      return res.render('index', { ytPP: results, ytData });
    })    
    */
  })
});

router.post('/puzzles/PPs/add', function(req, res, next) {
  getYTbyId(req, res, YT);
});

module.exports = router;
