var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
var YouTube = require('youtube-node');
var YT = new YouTube();

YT.setKey('AIzaSyDbpr3FzddtbOLSpaZaCMMqNzV2IutIx2Y')


// How do I take users' youtube URL and send a request to the youtube API
// and save some of the data from the object that youtube gives me and
// pass it to the index.ejs view?


/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.collection('YT-videos').find().toArray(function(err, results) {
    var ytData = {}
    YT.getById('pU9Q6oiQNd0', function(err, YTres) {
      if (err) console.log(err)
      ytData = YTres
      return ytData
    })
    console.log(ytData)
    return res.render('index', { ytPP: results, ytData: req.ytData });
  })
});

router.post('/puzzles/PPs/add', function(req, res, next) {
  const db = req.db;  
  db.collection('YT-videos').save(req.body, (err, result) => {
    if (err) return console.log(err)
    
    console.log('Saved to database')
    
    return res.redirect('/');
  })
});

module.exports = router;
